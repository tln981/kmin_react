import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

export default class ListMenu extends React.Component {
  render() {
    return <NavLink to={'/' + this.props.id}>{this.props.name}</NavLink>
  }
}
