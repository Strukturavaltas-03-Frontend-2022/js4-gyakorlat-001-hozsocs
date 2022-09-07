/* 2. Írj egy másik függvényt `sortStrings()` néven, mely paraméterként egy tömböt kap.
A függvény visszatérési érték egy Promise.
A Promise resolved lesz, amennyiben a tömb minden eleme string, a resolved value az ABC
szerinti rendezett tömb.
Ha nem minden elem string, akkor a Promise rejected lesz, az Error objektum üzenet szövege:
'Error: Not all items in the array are strings!'
Ha a sorba rendezés során hiba történik akkor is rejected lesz a Promise, az Error
objektum üzenet szövege ebben az esetben:
'Error: Something went wrong with sorting words.'
 */

const sortStrings = (string) => new Promise((resolve, reject) => {
  try {
    // eslint-disable-next-line no-unused-expressions
    (string.every((item) => typeof item === 'string'))
      ? resolve(string.sort())
      : reject(new Error('Error: Not all items in the array are strings!'));
  } catch (error) { reject(new Error('Error: Something went wrong with sorting words!')); }
});

export default sortStrings;
