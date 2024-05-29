export const calcTotalPrice = (items) => items.reduce((acc, item) => (acc += item.price), 0);

export const enumerate = (num, dec) => {
   return num === 1 ? dec[0] : dec[1];
};