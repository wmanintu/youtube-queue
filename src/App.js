import React, { Component } from 'react'
import './App.css'
import { connect } from 'react-redux'
import { Col } from 'react-bootstrap'
import Player from './components/Player'
import Search from './components/Search'
import Queue from './components/Queue'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTab: 'search',
      search: {
        tabStyle: '',
        textStyle: '',
        isHidden: ''
      },
      queue: {
        tabStyle: '',
        textStyle: '',
        isHidden: ''
      }
    }
  }
  componentDidMount() {
    this.setTabStyle(this.state.activeTab)
  }
  handleClickTab = (name) => {
    this.setState({ activeTab: name })
    this.setTabStyle(name)
  }
  setTabStyle = (name) => {
    switch (name) {
      case 'search':
          this.setState({
            search: {
              textStyle: 'tab-active-text',
              tabStyle: 'tab-item tab-search tab-active',
              isHidden: ''
            }
          })
          this.setState({
            queue: {
              textStyle: '',
              tabStyle: 'tab-item tab-queue',
              isHidden: 'hidden'
            }
          })
          break
      case 'queue':
          this.setState({
            queue: {
              textStyle: 'tab-active-text',
              tabStyle: 'tab-item tab-queue tab-active',
              isHidden: ''
            }
          })
          this.setState({
            search: {
              textStyle: '',
              tabStyle: 'tab-item tab-search',
              isHidden: 'hidden'
            }
          })
          break
      default:
        break
    }
  }
  render() {
    return (
      <div className="App">
        <div className="player-container" >
          <Col xs={12} md={12} lg={{offset: 2, span: 8}} xl={{offset: 3, span: 6}}>
            <Player />
          </Col>
        </div>
        <div>
          <Col xs={12} md={12} lg={{offset: 2, span: 8}} xl={{offset: 3, span: 6}}>
            <div className="tab-container">
              <div className={this.state.search.tabStyle} onClick={()=>this.handleClickTab('search')}>
                <div className={this.state.search.textStyle}>Videos</div>
              </div>
              <div className={this.state.queue.tabStyle} onClick={()=>this.handleClickTab('queue')}>
                <div className={this.state.queue.textStyle}>Queue {this.props.queueCount > 0 ? <span className='queue-count'>{this.props.queueCount}</span> : null}</div>
              </div>
            </div>
            <div className={this.state.search.isHidden}>
              <Search />
            </div>
            <div className={this.state.queue.isHidden}>
              <Queue />
            </div>
          </Col>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  queueCount: state.queue.list.length
})

export default connect(mapStateToProps)(App)
