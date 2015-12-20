import React, { Component } from 'react'
import UserProfile from 'UserProfile'

export default class SearchResult extends Component {
  render () {
    const { users } = this.props

    const userProfiles = users.map(function (user) {
      return <UserProfile {...user} />
    })

    return (
      <div className='users'>
        {userProfiles}
      </div>
    )

  }
}
