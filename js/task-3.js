function getElementWidth (contentWidth,paddingWidth,borderWidth) {
   const x = Number.parseInt(contentWidth);
   const y = Number.parseFloat(paddingWidth);
   const b = Number.parseInt(borderWidth);
     return (x + (y * 2) + (b * 2));
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200


  // як правильно пораховано (y * 2)  чи   (y + y)  ?????