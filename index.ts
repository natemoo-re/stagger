import stagger from '@stagger/core';

const container = document.querySelector('h1 > div[data-stagger]')! as HTMLElement;

stagger(container, { delay: 5000 });