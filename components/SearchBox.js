import React, { Component } from 'react'

export default class SearchBox extends Component {

  render () {

    return (
      <div className='searchbox' >
        <input onChange={::this.props.onChange} type='text' placeholder='Search for wdi-sg-discussions gitter usernames' />
      </div>
    )

  }

}
