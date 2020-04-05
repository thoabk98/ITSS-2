import React from 'react';
import axios from 'axios'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Tabs, Tab} from 'react-bootstrap'
import QuickInfo from './QuickInfo';
import MyChart from './MyChart';
import Data from './DataTable'
import News from './News'
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activeTab: 'data',
      data: [],
      world: {
        cases: 0,
        deaths: 0,
        recovered: 0,
        critical: 0,
        updated: 0
      }
    }
    this.handleSelect = this.handleSelect.bind(this)
    this.numberWithCommas = this.numberWithCommas.bind(this)
  }
  handleSelect(selectedTab){
    this.setState({
      activeTab: selectedTab
    });
  }
  numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
  }
  componentWillMount(){
    axios.get('https://corona.lmao.ninja/countries?sort=cases')
         .then(res => {
           this.setState({ data: res.data, world: res.data[0] })
         })
  }
  render(){
    return(
      <div className="App">
        <Container fluid>
          <Row>
            <Col md={4} className="info sticky-top">
              <QuickInfo/>
            </Col>
            <Col md={8}>
              <Tabs defaultActiveKey="data" onSelect={this.handleSelect}>
                <Tab eventKey="data" title="感染情報">
                  < div className="data-table">
                  <Data data={ this.state.data } comma ={ this.numberWithCommas }/>
                  </div>
                </Tab>
                <Tab eventKey="chart" title="グラフ">
                  <MyChart/>
                </Tab>
                <Tab eventKey="news" title="ニュース">
                  <News/>
                </Tab>               
              </Tabs>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default App;