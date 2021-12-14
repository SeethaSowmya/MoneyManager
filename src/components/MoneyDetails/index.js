/* eslint-disable arrow-body-style */
import './index.css'

const MoneyDetails = () => {
  return (
    <ul className="unOrder-list">
      <li className="list-container box1">
        <div className="image">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="Balance"
            className="list-image"
          />
        </div>
        <div className="list-sub">
          <p>Your Balance</p>
          <h1>Rs</h1>
        </div>
      </li>
      <li className="list-container box2">
        <div className="image">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="income"
            className="list-image"
          />
        </div>
        <div className="list-sub">
          <p>Your Income</p>
          <h1>Rs</h1>
        </div>
      </li>
      <li className="list-container box3">
        <div className="image">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
            className="list-image"
          />
        </div>
        <div className="list-sub">
          <p>Your Expenses</p>
          <h1>Rs</h1>
        </div>
      </li>
    </ul>
  )
}
export default MoneyDetails
