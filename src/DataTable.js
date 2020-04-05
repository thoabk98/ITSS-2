import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import 'font-awesome/css/font-awesome.min.css';

class DataTable extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
    <Table striped bordered hover variant="dark">

    <thead>
      <tr>
        <th>COUNTRY</th>
        <th>CONFIRMED</th>
        <th>CHANGE TODAY</th>
        <th>DEATHS</th>
        <th>CHANGE TODAY</th>
        <th>RECOVERD</th>
        <th>SERIOUS</th>
      </tr>
    </thead>
    <tbody>
      { this.props.data.map(country => {
        return(
          <tr>
            <th>{ country.country }</th>
            <th className="text-success"> { this.props.comma(country.cases) } </th>
            <th className="text-success">
              <i className="fa fa-arrow-up"></i>
              { this.props.comma(country.todayCases) }
            </th>
            <th className="text-danger">
              { this.props.comma(country.deaths) }
            </th>
            <th className="text-danger">
              <i className="fa fa-arrow-up"></i>
              { this.props.comma(country.todayDeaths) }
            </th>
            <th className="text-primary">{ this.props.comma(country.recovered) }</th>
            <th className="text-warning">{ this.props.comma(country.critical) }</th>
          </tr>
        )
      })}

    </tbody>
    </Table>
    )
  }
}

export default DataTable;