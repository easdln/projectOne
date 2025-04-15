import {Component} from 'react';

import './emloyees-list-item.css';

class EmployeesListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      increase: false
    };
  }

  onIncrease = () => {
    this.setState(({increase}) => ({
      increase: !increase,
      liked: false
    }))
  }

  onLike = () => {
    this.setState(({liked}) => ({
      liked: !liked
    }))
  }

  render() {
    const {name, salary, onDelete} = this.props;
    const {increase, liked} = this.state;
    let liClassName =  'list-group-item d-flex justify-content-between';
    if (increase) {
      liClassName += ' increase'
    }

    if (liked) {
      liClassName += ' like'
    }

    return (
      <li className={liClassName}>
        <span className="list-group-item-label"
              onClick={this.onLike}>{name}</span>
        <input type="text" className="list-group-item-input" defaultValue={salary + '$'} />
        <div className='d-flex justify-content-center align-items-center'>
          <button type="button"
            className="btn-cookie btn-sm"
            onClick={this.onIncrease}>
            <i className="fas fa-cookie"></i>
          </button>
  
          <button type="button"
            className="btn-trash btn-sm "
            onClick={onDelete}>
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    )
  }
}

export default EmployeesListItem;