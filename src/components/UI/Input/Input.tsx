import { FC } from 'react';
import './Input.scss';


interface InputProps {
    label?: string,
    id?: string,
    error?: string,
    nameInput?: string
    //@todo specify args types
    args?: any
    value?: string
    onChange: (e: {
        target: {
            name: string;
            value: string;
        };
    }) => void
}

export const Input: FC<InputProps> = ({
  label,
  id,
  error,
  nameInput,
  onChange,
  args
}) => (
  <div className='input'>
    {label && (
      <label
        className='input__label'
        htmlFor={id}
      >
        {label}
      </label>
    )}
    <input type='text' className='input__input' name={nameInput} onChange={onChange} {...args}/>
    {error && <div className='input__error'>{error}</div>}
  </div>
);