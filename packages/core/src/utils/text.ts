const character = (value: string) => value.split('');
const word = (value: string) => value.split(/\b(\w+\W+)/g).filter(x => x);
const splitters = { character, word };
const split = (value: string, by: 'character' | 'word') => splitters[by](value);

export const wrapText = (element: HTMLElement, by: 'character' | 'word') => element.innerHTML = split(element.textContent || '', by).map(unit => /^\s+$/.test(unit) ? `<span data-stagger-ignore>${unit}</span>` : `<span>${unit}</span>`).join('');