import React, { Dispatch, SetStateAction } from 'react'
import { IColorItem } from '../../../../types'
import { storage } from '../../../../utils';
import './ColorItem.scss';


export const ColorItem = ({
  item,
  removable = false,
  storageColors,
  setStorageColors }:
  {
    item: IColorItem,
    removable?: true | false,
    storageColors?: IColorItem[]
    setStorageColors?: Dispatch<SetStateAction<IColorItem[]>>
  }) => {
  const { hex, r, g, b } = item;

  const removeClickHandler = (hex: string) => {
    storage.removeFromArray('hexColors', hex);
    // @ts-ignore: Unreachable code error
    const arr = [...storageColors];
    arr?.splice(arr?.findIndex(item => item.hex === hex), 1);
    // @ts-ignore: Unreachable code error
    setStorageColors([...arr]);
  }

  return (
    <div className='color-item'>
      <div style={{ 'backgroundColor': hex }} className='color-item__sample'></div>
      <div className='color-item__hex'>{`${hex}`}</div>
      <div className='color-item__rgb'>{`rgb(${r},${g},${b})`}</div>
      {removable && <button onClick={() => removeClickHandler(hex)} className='color-item__remove'>X</button>}
    </div>
  )
}
