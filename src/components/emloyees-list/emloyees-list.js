import EmployeesListItem from '../emloyees-list-item/emloyees-list-item';
import './emloyees-list.css';

const EmloyeesList = ({data, onDelete}) => {
  const elements = data.map(item => {
    const {id, ...itemProps} = item;
    return (
      <EmployeesListItem key={id} 
        {...itemProps}
        onDelete={() => onDelete(id)}
        />
    )
  })
  return (
    <ul className="app-list list-group">
      {elements}
    </ul>
  )
}

export default EmloyeesList;