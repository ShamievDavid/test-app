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

  const [hexColors, setHexColors] = useState([]);

  return (
    <div>
        <InputForm setHexColors={setHexColors} hexColors={hexColors}/>
        <Filter hexColors={hexColors} />
    </div>
  )
}
