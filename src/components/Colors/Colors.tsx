import React, { FC, useState, useEffect} from 'react'
import { InputForm } from './InputForm';
import { Filter } from './Filter';

interface ColorItem {
  hex: string,
  r: string,
  g: string,
  b: string,
}

export const Colors: FC = () => {

  const [colors, setColors] = useState([]);

  return (
    <div>
        <InputForm setColors={setColors} colors={colors}/>
        <Filter colors={colors} />
    </div>
  )
}
