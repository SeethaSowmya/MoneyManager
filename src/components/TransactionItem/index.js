import './index.css'

const TransactionItem = props => {
  const {details} = props
  const {historyList} = details
  const {title, amount, type} = historyList
  return (
    <li className="list-head">
      <p>{title}</p>
      <p>{amount}</p>
      <p>{type}</p>
    </li>
  )
}

export default TransactionItem
