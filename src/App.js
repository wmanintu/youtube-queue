import React, { Component } from 'react'
import './App.css'
import VideoPlayer from './components/Video'
import Search from './components/Search'
import { Row, Col } from 'react-bootstrap'
import { Provider } from 'react-redux'
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
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
                <Search/>
              </Col>
            </Row>
          </div>
        </div>
      </Provider>
    )
  }
}

export default App
