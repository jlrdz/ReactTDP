import React, { Component } from 'react'
import DisplayedName from './components/DisplayedName'
import ErrorBoundary from './components/ErrorBoundary'

// In App.js
class App extends Component {
  render() {
    return <>
      <DisplayedName name="John" />
      <ErrorBoundary>
        <DisplayedName />
      </ErrorBoundary>
    </>
  }
}

export default App