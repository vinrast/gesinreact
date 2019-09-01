import React from 'react'
import '../styles/welcome.css'

class Welcome extends React.Component {
  render() {
    return (
      <div className="container">
          <h1>Hello {this.props.user}!!</h1>
          <p>Let's workout to get someone gains</p>
      </div>
    )
  }
}

export default Welcome
