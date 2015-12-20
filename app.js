import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import SearchBox from './components/SearchBox'
import SearchResult from './components/SearchResult'


export default class App extends Component {

  constructor (props) {
    super(props)

    this.state = {
      loading: true,
      users: [],
    }
  }

  componentDidMount() {
    this.getUserList()
  }

  render () {
    return (
      <div className='appWrapper'>
        <SearchBox onChange={::this.onChange} />
        {this.getLoading()}
        <SearchResult users={this.state.users} />
      </div>
    )
  }

  onChange (e) {
    const query = e.target.value ? '?username='+e.target.value : ''

    this.setState({
      loading: true
    })

    this.getUserList(query)
  }

  getUserList (query = '') {
    const fieldbookApiUrl = 'https://api.fieldbook.com/v1/5676d9a0be5b1f03002f63e9/ga_students_wdi_sg_discussions' + query
    var that = this

    fetch(fieldbookApiUrl)
      .then(function (response) {
        return response.json()
      }).then(function (result) {
        that.setState({
          loading: false,
          users: result
        })
      })
  }

  getLoading () {
    const { loading, users } = this.state

    if (loading) {
      return <div>Loading ...</div>
    } else if (!loading && users.length === 0) {
      return <div>Nothing found, try again</div>
    } else {
      return <div>Found {users.length} users</div>
    }

    return null
  }
}

  // Mounting App
  ReactDOM.render(
      <App />, document.querySelector('#app')
  )
