import { Options } from '../index';

const isTextNode = (node: Element) => node.nodeType === node.TEXT_NODE;
export const isTextOnly = (node: Element) => Array.from(node.childNodes).every(n => isTextNode(n as any));
export const children = (node: Element) => Array.from(node.children);
export const data = (node: HTMLElement, dataset: { [key: string]: any }) => {
    for (const [key, value] of Object.entries(dataset)) {
        node.dataset[key] = value;
    }
};
export const getDataOptions = (node: HTMLElement) => {
    let opts: Partial<Options> = {};
    for (const [key, value] of Object.entries(node.dataset)) {
        if (key.startsWith('stagger')) {
            opts = { ...opts, [key.replace('stagger', '').toLowerCase()]: value };
        }
    }
    return opts;
};