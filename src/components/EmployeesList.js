import React from 'react';

class EmployeesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: this.props,
      disEmployees: this.props,
      curSearch: ''
    }
    this.updateDisEmployees = this.updateDisEmployees.bind(this);
  }

  updateDisEmployees(event) {
    this.setState({curSearch: event.target.value});
  }

  render() {
    let { employees } = this.state.disEmployees;
    const curSearch = this.state.curSearch;
    employees = employees.filter((val, ind) => {
      if (val.name.toLowerCase().includes(curSearch.toLowerCase())) {
        return true;
      } else {
        return false;
      }
    })

    return (
      <React.Fragment>
        <div className="controls">
          <input type="text" className="filter-input" data-testid="filter-input" value={curSearch} onChange={this.updateDisEmployees} />
        </div>
        <ul className="employees-list">
          { employees.map(employee => (
            <li key={employee.name} data-testid="employee">{employee.name}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default EmployeesList;
