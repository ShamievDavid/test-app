import { IColorItem } from '../types';

export const validation = {
  hex: (value: string) => {
    const reg = /^#([0-9a-f]{3}){1,2}$/i;
    if (!value) {
      return 'required field';
    }
    if (value.length > 7) {
      return 'too many characters';
    }
    if (value.charAt(0) !== '#') {
      return '`#` except first character';
    }
    if (!reg.test(value)) {
      return 'non valid characters';
    }
    return '';
  },
};

export const storage = {
  addInArray: (key: string, value: string) => {
    if (!value) return;
    const data = JSON.parse(localStorage.getItem(key) || '[]');
    localStorage.setItem(key, JSON.stringify([...data, value]));
  },
  getArray: (key: string) => {
    const data: string | null | string[] = localStorage.getItem(key) || '[]';
    return JSON.parse(data);
  },
  removeFromArray: (key: string, value: string) => {
    let data: string[] = JSON.parse(localStorage.getItem(key) || '[]');
    const index = data.indexOf(value);
    if (index > -1) {
      data.splice(index, 1);
    }
    localStorage.setItem(key, JSON.stringify(data));
  }
};

interface IColors {
  hexToRgbObj: (arr: string[]) => (IColorItem | undefined)[]
}

export const colors: IColors = {

  hexToRgbObj: (arr: string[]) => {
    const result = arr.map((hex) => {
      const rgb: string[] | null = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      if (rgb) {
        return {
          hex,
          r: parseInt(rgb[1], 16),
          g: parseInt(rgb[2], 16),
          b: parseInt(rgb[3], 16)
        }
      }
    });

    return result;
  }
}
