import React, { Component } from 'react';
import { validation, storage } from '../../utils';
import { Input } from '../UI/Input';
import './ColorInputForm.scss';


type ColorInputState = {
  color: string;
  error: string;
}

export class ColorInput extends Component<{}, ColorInputState> {

  state = {
    color: '',
    error: ''
  }

  handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const color = this.state.color
    const error = validation.hex(color);
    this.setState({ ...this.state, error});
    if (!error) {
      storage.addInArray('colors', color.toUpperCase());
    }
  };

  handleOnChange = (e: { target: { name: string; value: string; }; }) => {
    const color = e.target.value;
    this.setState({ ...this.state, color});
  };

  render() {
    return (
      <div className='color-input'>
        <form className='color-input__form'onSubmit={this.handleSubmit}>
          <Input 
            label='color input'
            nameInput="color"
            error={this.state.error}
            value={this.state.color}
            onChange={this.handleOnChange}
          />
          <div className='color-input__button-wrapper'>
            <button className='color-input__button'>ADD COLOR</button>
          </div>
        </form>
      </div>
    )
  };
};
