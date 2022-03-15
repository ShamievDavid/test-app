import React, { useState, useEffect} from 'react'

interface ColorItem {
  hex: string,
  r: string,
  g: string,
  b: string,
}

export const Filter = ({ colors }: { colors: string[]}) => {

  const [colorsObj, setColorsObj] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    
  }, []);

  return (
    <div>
      {colors.map((color) => color)}
    </div>
  )
}
