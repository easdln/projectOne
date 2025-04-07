import EmployeesListItem from '../emloyees-list-item/emloyees-list-item';
import './emloyees-list.css';

const EmloyeesList = ({data}) => {
  const elements = data.map(item => {
    const {id, ...itemProps} = item;
    return (
      <EmployeesListItem key={id} {...itemProps}/>
    )
  })
  return (
    <ul className="app-list list-group">
      {elements}
    </ul>
  )
}

export default EmloyeesList;