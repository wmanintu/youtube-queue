import React, { Component } from 'react'
import './App.css'
import { Col, Tabs, Tab, } from 'react-bootstrap'
import { Provider } from 'react-redux'
import store from './store'
import Player from './components/Player'
import Search from './components/Search'
import Queue from './components/Queue'
// searchTab: '',
      // searchTxt: '',
      // queueTab: '',
      // queueTxt: ''
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTab: 'search',
      searchText: '',
      searchTab: 'tab-item search-tab',
      queueText: '',
      queueTab: 'tab-item queue-tab'
    }
  }
  componentDidMount = () => {
    this.tab(this.state.activeTab)
  }
  handleClickTab = (name) => {
    console.log(name)
    this.setState({ activeTab: name })
    this.tab(name)
  }
  tab = (name) => {
    console.log('call tab', name)
    switch (name) {
      case 'search':
          this.setState({
            searchText: 'active-tab-text',
            searchTab: 'tab-item search-tab active-tab'
          })
          this.setState({
            queueText: '',
            queueTab: 'tab-item queue-tab'
          })
          break
      case 'queue':
          this.setState({
            queueText: 'active-tab-text',
            queueTab: 'tab-item queue-tab active-tab'
          })
          this.setState({
            searchText: '',
            searchTab: 'tab-item search-tab'
          })
          break
      default:
        break
    }
  }
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="black" >
            <Col xs={12} md={12} lg={{offset: 2, span: 8}} xl={{offset: 3, span: 6}}>
              <Player />
            </Col>
          </div>
          <div>
            <Col xs={12} md={12} lg={{offset: 2, span: 8}} xl={{offset: 3, span: 6}}>
              <div className="tab-container">
                <div className={this.state.searchTab} onClick={()=>this.handleClickTab('search')}>
                  <div className={this.state.searchText}>Search</div>
                </div>
                <div className={this.state.queueTab} onClick={()=>this.handleClickTab('queue')}>
                  <div className={this.state.queueText}>Queue</div>
                </div>
              </div>
              <hr></hr>
              <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                <Tab eventKey="home" title="Search">
                  <Search />
                </Tab>
                <Tab eventKey="profile" title="Queue">
                  <Queue />
                </Tab>
              </Tabs>
            </Col>
          </div>
        </div>
      </Provider>
    )
  }
}

export default App
