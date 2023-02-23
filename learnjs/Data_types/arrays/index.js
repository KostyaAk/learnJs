let styles = ['Джаз', 'Блюз'];
console.log(styles);

styles.push('Рок-н-рол');
console.log(styles);

let index = Math.round((styles.length - 1) / 2);
styles[index] = 'Классика';
console.log(styles);

styles.shift();
console.log(styles);

styles.unshift('Рэп', 'Регги');
console.log(styles);
