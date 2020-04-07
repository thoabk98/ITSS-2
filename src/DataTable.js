import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import 'font-awesome/css/font-awesome.min.css';

class DataTable extends Component{
  constructor(props){
    super(props);
    this.state = {
      filterData:[]
     }
    this.handleChange = this.handleChange.bind(this)
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.data.length > 0){
      this.setState({filterData: nextProps.data})
    }
  }
  handleChange(e){
    let data = this.props.data
    data = data.filter(function(item){
      return item.country.toLowerCase().search(
        e.target.value.toLowerCase()) !== -1;
    });
    this.setState({ filterData: data })
  }
  render(){
    return(
      <div>
        <input type="search" className="form-control ds-input" id="search-input" placeholder="Search..." 
        onChange={this.handleChange}>
        </input>
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
            { this.state.filterData.map((country,index) => {
              return(
                <tr key={index}>
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
    </div>
    )
  }
}

export default DataTable;