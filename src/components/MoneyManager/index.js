import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import MoneyDetails from '../MoneyDetails/index'
import TransactionItem from '../TransactionItem/index'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  start = {
    titleInput: '',
    amountInput: '',
    optionId: transactionTypeOptions[0].optionId,
    historyList: [],
  }

  onAddInformation = event => {
    event.preventDefault()
    const {titleInput, amountInput, optionId} = this.state

    const typeOption = transactionTypeOptions.find(
      eachTransaction => eachTransaction.optionId === optionId,
    )
    const {displayText} = typeOption
    const newHistoryList = {
      id: uuidv4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: displayText,
    }

    this.setState(prevState => ({
      historyList: [...prevState.historyList, newHistoryList],
      titleInput: '',
      amountInput: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  onChangeAmount = event => {
    this.setState({amountInput: event.target.value})
  }

  onChangeTitle = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeType = event => {
    this.setState({optionId: event.target.value})
  }

  render() {
    const {historyList, titleInput, amountInput, optionId} = this.state

    return (
      <div className="Manager-container">
        <div className="welcome-section">
          <h1>Hi, Richard</h1>
          <p>
            Welcome back to your
            <span className="span-element"> MoneyManager</span>
          </p>
        </div>
        <div>
          <MoneyDetails />
        </div>
        <div className="main-container">
          <form className="form-container" onSubmit={this.onAddInformation}>
            <h1>Add Transaction</h1>
            <label className="label" htmlFor="title">
              Title
            </label>

            <br />
            <input
              id="title"
              placeholder="Title"
              className="input1 label"
              value={titleInput}
              onChange={this.onChangeTitle}
            />
            <br />
            <label className="label" htmlFor="amount">
              Amount
            </label>
            <br />
            <input
              id="amount"
              placeholder="Amount"
              value={amountInput}
              onChange={this.onChangeAmount}
              className="input1 label"
            />
            <br />
            <label className="label" htmlFor="type">
              Amount
            </label>
            <br />
            <select
              className="label"
              value={optionId}
              id="type"
              onChange={this.onChangeType}
            >
              {transactionTypeOptions.map(each => (
                <option value={each.optionId}>{each.displayText}</option>
              ))}
            </select>
          </form>
          <div className="history-container">
            <h1>History</h1>
            <ul className="ul">
              <li className="list-head">
                <p className="">Title</p>
                <p className="">Amount</p>
                <p className="title">Type</p>
              </li>
              {historyList.map(eachItem => (
                <TransactionItem key={eachItem.id} details={historyList} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
