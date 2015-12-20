import React, { Component } from 'react'

const UserProfile = (props) =>
  <a className='user' target='_blank' href={'https://github.com'+props.url}>
    <p className='title' >{props.displayname}</p>
    <img src={props.avatarurlmedium} />
  </a>

export default UserProfile
