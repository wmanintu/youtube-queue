import React, { Component } from 'react'
import './App.css'
import VideoPlayer from './components/Video'
import Queue from './components/Queue'
import { Row, Col } from 'antd'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-container">
          <Row gutter={16}>
            <Col className="green"
              xs={24}
              md={{ span: 22, offset: 1 }}
              lg={{ span: 15, offset: 1 }}>
              <VideoPlayer/>
            </Col>
            <Col
              xs={24}
              md={22}
              lg={7}>
              <Queue/>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default App
