import React, { useState, useEffect } from 'react';
import { colors as colorUtil, storage } from '../../../utils';
import { IColorItem } from '../../../types';
import { ColorItem } from './ColorItem';
import './Filter.scss';
import { Input } from '../../UI/Input';

export const Filter = ({ hexColors }: { hexColors: string[] }) => {

  const [colors, setColors] = useState<IColorItem[]>([]);
  const [storageColors, setStorageColors] = useState<IColorItem[]>([])

  const [filters, setFilters] = useState({
    r: '0',
    g: '0',
    b: '0'
  });

  useEffect(() => {
    let colors = colorUtil.hexToRgbObj(hexColors);
    let storageColors = colorUtil.hexToRgbObj(storage.getArray('hexColors'));
    // @ts-ignore: Unreachable code error
    // @todo: add setState type
    setColors(colors);
    // @ts-ignore: Unreachable code error
    setStorageColors(storageColors);
  }, [hexColors]);

  const filterChangeHandler = (e: {
    target: {
      name: string;
      value: string;
    }
  }) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  }

  const filterRgb = (item: { r: string | number, g: string | number, b: string | number }) => {
    const { r, g, b } = item
    const MAX_RGB = 255;
    return ((Number(r) * 100 / MAX_RGB) > Number(filters.r) &&
      (Number(g) * 100 / MAX_RGB) > Number(filters.g) &&
      (Number(b) * 100 / MAX_RGB) > Number(filters.b));
  }

  return (
    <div className='filter'>
      <h1>Filters</h1>
      <div className='filter__input'>
        <Input label='Red %' nameInput='r' value={filters.r} onChange={filterChangeHandler} />
        <Input label='Green %' nameInput='g' value={filters.g} onChange={filterChangeHandler} />
        <Input label='Blue %' nameInput='b' value={filters.b} onChange={filterChangeHandler} />
      </div>
      <div className='filter__list'>
        {!!colors.length && <div>
          <h1>State colors</h1>
          {colors.map((item, index) => <ColorItem key={index} item={item} />)}
        </div>}
        {!!colors.length && <div className='filter__list-filter'>
          <h1>Filter colors</h1>
          {colors.filter(filterRgb)
                .map((item, index) => <ColorItem key={index} item={item} />)}
        </div>}
        {!!storageColors.length && <div className='filter__list-storage'>
          <h1>Storage colors</h1>
          {storageColors.map((item, index) => {
            return (
              <ColorItem
                key={index}
                item={item}
                removable={true}
                storageColors={storageColors}
                setStorageColors={setStorageColors} />
            );
          })}
        </div>}
      </div>
    </div>
  )
}
