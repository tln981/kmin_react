import React from 'react'
import ListMenu from './components/ListMenu'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends React.Component {
  state = { lists: [] }
  handleAddList = () => {
    const currentList = this.state.lists
    const nextList = currentList.concat([
      {
        id: Date.now(),
        name: 'list ' + (this.state.lists.length + 1),
      },
    ])
    this.setState({ lists: nextList })
  }
  render() {
    return (
      <Router>
        <div>
          <button
            style={{
              backgroundColor: '#fff',
              position: 'fixed',
              top: '300px',
              left: '160px',
            }}
            onClick={() => this.handleAddList()}
          >
            +
          </button>
          <Route exact path="/" />
          {this.state.lists.map(list => (
            <ListMenu name={list.name} id={list.id} />
          ))}
        </div>
      </Router>
    )
  }
}
export default App
