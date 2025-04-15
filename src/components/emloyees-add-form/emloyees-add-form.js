import { Component } from 'react';

import './emloyees-add-form.css';

class EmloyeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      salary: ''
    }
  }

  onInputValue = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addRow(this.state.name, this.state.salary);
    this.setState({
      name: '',
      salary: ''
    })
  }

  render() {
    const {name, salary} = this.state;
    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form className="add-form d-flex" onSubmit={this.onSubmit}>
          <input type="text" 
            className="form-control new-post-label" 
            placeholder='Как его зовут?'
            name='name'
            value={name}
            onChange={(e) => this.onInputValue(e)}/>
          <input type="number"
            className="form-control new-post-label" 
            placeholder="З/П в $?"
            name='salary'
            value={salary}
            onChange={(e) => this.onInputValue(e)}/>
  
          <button type="submit" 
            className="btn btn-outline-light">Добавить</button>
        </form>
      </div>
    )
  }
}

export default EmloyeesAddForm;