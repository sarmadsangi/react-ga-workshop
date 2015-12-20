import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import SearchBox from './components/SearchBox'
import SearchResult from './components/SearchResult'


export default class App extends Component {

  constructor (props) {
    super(props)

    this.baseUrl = 'https://api.fieldbook.com/v1/5676d9a0be5b1f03002f63e9/'
    this.sheetName = 'ga_students_wdi_sg_discussions'

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
    const apiUrl = this.baseUrl + this.sheetName + query

    var that = this

    fetch(apiUrl)
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
