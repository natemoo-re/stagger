import stagger from 'stagger/core';

const h1 = document.querySelector('h1')!;
const list = document.querySelector<HTMLElement>('.list')!;

// console.log(dom.isText(h1));
// console.log(dom.isText(list));

// console.log(dom.children(list));

stagger(h1, { delay: 100 });