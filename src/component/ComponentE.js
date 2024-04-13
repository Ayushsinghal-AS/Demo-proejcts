import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './userContext'

export class ComponentE extends Component {
  render() {
    return (
        <>
        <div>
            Component E context {this.context}
        </div>
      <ComponentF />
      </>
    )
  }
}

ComponentE.contextType = UserContext

export default ComponentE