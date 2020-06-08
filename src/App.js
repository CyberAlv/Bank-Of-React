import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Components/Home';
import UserProfile from './Components/UserProfile';
import LogIn from './Components/LogIn'
import axios from "axios"
import Debit from './Components/Debit'
import Credits from './Components/Credits'


class App extends Component {
  constructor() {
    super();
    this.state = {
      accountBalance: 14568.27,
      currentUser: {
        userName: "Agent47",
        memberSince: '09/23/87'
      },
    debit: [],
    credits: [],
    }
    this.addDebit = this.state.addDebit.bind(this)
    this.addCredit = this.state.addCredit.bind(this)
  }

  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }

  async componentDidMount(){
    let debit = axios.get("https://moj-api.herokuapp.com/debits")
    let credits = axios.get("https://moj-api.herokuapp.com/credits")
    debit = debit.data
    credits = credits.data
    let debitSum = 0
    let creditSum = 0
    let total = this.state.accountBalance;
    debit.forEach((debit) =>{
      debitSum += debit.amount
    });
    credits.forEach((credits) =>{
      creditSum += credits.amount
    });
  }

  render(){

  const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
  const UserProfileComponent = () => (<UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince} />);
  const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} {...this.props}/>)
  const DebitComponent = () => (<Debit addDebit={this.addDebit} Debit={this.Debit} />  );
  const CreditsComponent = () => (<Credits addCredits={this.addCredits} Credits={this.Credits}/>);

  return (
    <Router>
      <div>
        <Route exact path="/" render={HomeComponent}/>
        <Route exact path="/userProfile" render={UserProfileComponent}/>
        <Route exact path="/login" render={LogInComponent}/>
        
        <Route exact path="/Debit" render={DebitComponent}></Route>
        <Route exact path="/Credits" render={CreditsComponent}></Route>
      </div>
    </Router>    
  )};
}

export default App;
