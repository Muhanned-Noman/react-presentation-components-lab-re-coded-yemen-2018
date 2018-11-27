// Code SimpleComponentHere Here
import React, { Component } from 'react';

class SimpleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
<<<<<<< HEAD
      mood:'happy'
    };
  }
  handleClick = () => {
    const changeMood = this.state.mood === 'happy' ? 'sad' : 'happy';
    this.setState({ mood: changeMood });
  }
  render() {
    return <div
      onClick={this.handleClick}>{this.state.mood}
    </div>;
=======
      mood: 'happy'
    };
  }
  handleClick = () => {
    const theMood = this.state.mood === 'happy' ? 'sad' : 'happy';
    this.setState({ mood: newMood });
  }
  render() {
    return <div onClick={this.handleClick}>{this.state.mood}</div>;
>>>>>>> d944e60a7660430fd573f253e3c8702410d5b87a
  }
  }

export default SimpleComponent;
