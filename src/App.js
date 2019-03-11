import React, { Component } from 'react'
import './App.css'
import { Col, Tabs, Tab, } from 'react-bootstrap'
import { Provider } from 'react-redux'
import store from './store'
import VideoPlayer from './components/Video'
import Search from './components/Search'
import Queue from './components/Queue'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="black" >
            <Col xs={12} lg={{offset: 2, span: 8}}>
              <VideoPlayer />
            </Col>
          </div>
          <div>
            <Col xs={12} lg={{offset: 2, span: 8}}>
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
