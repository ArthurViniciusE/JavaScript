let isAtivo = false;

console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo); //!! represente a negação da negação, e no exemplo indentifica se o 1 é true;

console.log('verdadeiros...');
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!![[]]);
console.log(!!{});
console.log(!!Infinity);

console.log('falsos...');
console.log(!!'0');
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);