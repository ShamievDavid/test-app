import React, { Component, Dispatch, SetStateAction } from 'react';
import { validation, storage } from '../../../utils';
import { Input } from '../../UI/Input';
import './InputForm.scss';


interface ColorInputState {
  color: string,
  error: string,
}

interface InputFormProps {
  //@todo: specify any
  setColors: Dispatch<SetStateAction<any>>,
  colors: Array<any>
}

export class InputForm extends Component<InputFormProps, ColorInputState> {

  state = {
    color: '',
    error: ''
  }

  handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const color = this.state.color.toUpperCase();
    const colors = this.props.colors;
    const error = validation.hex(color);
    this.setState({ ...this.state, error });
    if (!error) {
      storage.addInArray('colors', color);
      this.props.setColors([...colors, color]);
    }
  };

  handleOnChange = (e: { target: { name: string; value: string; }; }) => {
    const color = e.target.value;
    this.setState({ ...this.state, color });
  };

  render() {
    return (
      <div className='color-input'>
        <form className='color-input__form' onSubmit={this.handleSubmit}>
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
