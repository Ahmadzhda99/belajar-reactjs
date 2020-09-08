import React, { Component } from 'react';

class CustomInput extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 'Input pertama' };
    this.handleInput = this.handleInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.textInput = React.createRef();
  }

  handleInput() {
    this.setState({ value: '' });
    this.textInput.current.focus();
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <div>
        <input type='text' value={this.state.value} ref={this.textInput}
          onChange={(e) => this.handleChange(e)} />
        <button onClick={this.handleInput}>Send</button>
        <p>Inputanmu: {this.state.value}</p>
      </div>
    );
  }
}

export default CustomInput;