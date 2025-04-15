import { Component } from 'react';
import nextId  from "react-id-generator";

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmloyeesList from '../emloyees-list/emloyees-list';
import EmployeesAddForm from '../emloyees-add-form/emloyees-add-form';
import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: 'Mark S.', salary: 8030, increase: false, id: 1 },
        { name: 'Helly R.', salary: 9400, increase: true, id: 2 },
        { name: 'Jemma S.', salary: 4000, increase: false, id: 3 },
        { name: 'Irving T.', salary: 7000, increase: true, id: 4 }
      ]
    };
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
      return {
        data: data.filter(item => item.id !== id)
      }
    })
  }

  addNewRow = (name, salary) => {
    const newRow = [{
      name,
      salary,
      increase: false,
      id: nextId()
    }];
    this.setState(({data}) => {
      return {
        data: [...data, ...newRow]
      }
    })
  }

  render() {
    return (
      <div className="app">
        <AppInfo />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>

        <EmloyeesList
          data={this.state.data}
          onDelete={id => this.deleteItem(id)} />
        <EmployeesAddForm addRow={(name, salary) => this.addNewRow(name, salary)}/>
      </div>
    );
  }
}

export default App;