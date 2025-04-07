import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmloyeesList from '../emloyees-list/emloyees-list';
import EmployeesAddForm from '../emloyees-add-form/emloyees-add-form';
import './app.css';

function App() {
  const data = [
    { name: 'Mark S.', salary: 8030, increase: false, id: 1 },
    { name: 'Helly R.', salary: 9400, increase: true , id: 2},
    { name: 'Jemma S.', salary: 4000, increase: false, id: 3},
    { name: 'Irving T.', salary: 7000, increase: true, id: 4}
  ];
  return (
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>

      <EmloyeesList data={data}/>
      <EmployeesAddForm />
    </div>
  );
}

export default App;