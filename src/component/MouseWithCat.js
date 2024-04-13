import React from 'react'

class Cat extends React.Component {
    render() {
      const mouse = this.props.mouse;
      return (
        <img src="./Images/corn.jpg" alt="cat" style={{ position: 'absolute', width:"10%", height:"10%", left: mouse.x, top: mouse.y }} />
      );
    }
  }
  
  class MouseWithCat extends React.Component {
    constructor(props) {
      super(props);
      this.handleMouseMove = this.handleMouseMove.bind(this);
      this.state = { x: 0, y: 0 };
    }
  
    handleMouseMove(event) {
      this.setState({
        x: event.clientX,
        y: event.clientY
      });
    }
  
    render() {
      return (
        <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
  
        <p>position: ({this.state.x}, {this.state.y})</p>          
        <Cat mouse={this.state} />
        </div>
      );
    }
  }
  


export default MouseWithCat