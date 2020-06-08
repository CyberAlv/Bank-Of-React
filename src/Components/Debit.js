import React, { Component } from "react"
import { Link } from "react-router-dom"

class Debit extends Component {

    constructor(props) {
        super(props) 
        this.state = {
            debit: []
        }
    }
    debitView() {
        const { debit } = this.props;
        debugger
        return debit.map((debit) => {
        return <li key={debit.id}>{debit.amount}{debit.date}</li>
        }) 
    }

    render() {
        const {addDebit} = this.props
        return <div>
            <h1>Debit</h1>
            {this.DebitView()}
            <br/>
            <form action="#" onSubmit={addDebit}>
                Amount: <input type="number" name="amount" />&nbsp;
                Date: <input type="date" name="date" />&nbsp;
                <button type="submit">Add Debit</button>
            </form>

                <br/>
                <br/>
                <Link to="/">Return to Home</Link>
                <br/>
                <Link to="/login">Log in</Link>
                <br/>
                <Link to="/userProfile">User Profile</Link>
                <br/>
                <Link to="/debit">Debit</Link>
                <br/>
                <Link to="/credits">Credit</Link>
        </div>
    }
}

export default Debit;