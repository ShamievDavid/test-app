export const validation = {
  hex: (value: string) => {
    const reg = /^#([0-9a-f]{3}){1,2}$/i;
    if (!value) {
      return 'required field';
    }
    if (value.length > 7) {
      return 'too many characters';
    }
    if (!reg.test(value)) {
      return 'non valid characters';
    }
    if (value.charAt(0) !== '#') {
      return '`#` except first character';
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

//   getArray: (key: string) => {
//     if (!key) return;
//     let data = [];
//     try {
//      // data = JSON.parse(localStorage.getItem(key)) || [];
//      console.log('');
//     } catch (e) {
//       localStorage.setItem(key, JSON.stringify([]));
//     }
//     return data;
//   },
};
