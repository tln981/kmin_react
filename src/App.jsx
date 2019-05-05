import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  NavLink,
} from 'react-router-dom'
import { Helmet } from 'react-helmet'
Helmet.defaultProps = {
  defer: false,
}
function Index() {
  return (
    <div>
      <Helmet title="Home" />
      <h2>Home</h2>
    </div>
  )
}

function About() {
  return (
    <div>
      <Helmet title="About" />
      <h2>About</h2>
    </div>
  )
}
function AboutMe() {
  return (
    <div>
      <Helmet title="About me" />
      <h2>About me</h2>
    </div>
  )
}

function Users() {
  return (
    <div>
      <Helmet title="Users" />
      <h2>Users</h2>
    </div>
  )
}

class NotFound extends React.Component {
  state = { time: 3 }
  interval = null
  componentDidMount = () => {
    this.interval = setInterval(() => {
      this.setState({ time: this.state.time - 1 })
    }, 1000)
  }
  componentWillUnmount = () => {
    clearInterval(this.interval)
  }
  render() {
    const { time } = this.state
    if (time)
      return (
        <div>
          <Helmet title={`(${time}) Redirecting...`} />
          <h2>Redirecting to Home in {time}s</h2>
        </div>
      )
    return <Redirect to="/" />
  }
}

function GoHome() {
  return <Redirect to="/" />
}

function AppRouter() {
  return (
    <Router>
      <Helmet defaultTitle="Kmin Todo App" titleTemplate="%s – Kmin Todo App" />
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/about/me">About Me</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
            <li>
              <Link to="/home">Go Home</Link>
            </li>
            <li>
              <Link to="/not-found/">Not found</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/about/" exact component={About} />
          <Route path="/about/me" component={AboutMe} />
          <Route path="/users/" component={Users} />
          <Route path="/home/" component={GoHome} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  )
}

export default AppRouter
