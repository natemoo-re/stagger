import { data, children, isTextOnly, getDataOptions } from './utils/dom';
import { wrapText } from './utils/text';
import { setCustomProperties } from './utils/style';

export interface Options {
    by: 'character' | 'word';
    delay: string | number;
    wait: string | number;
}

const defaultOpts: Options = {
    by: 'character',
    delay: 20,
    wait: 0
}

const init = (element: HTMLElement, options: Partial<Options> = {}) => {
    let { by, delay, wait }: Options = Object.assign({}, defaultOpts, options, getDataOptions(element));
    if (isTextOnly(element)) wrapText(element, by);
    setCustomProperties(element, { delay, wait }, { unit: 'ms' });
    data(element, { stagger: '' });
    
    let i = 0;
    children(element).forEach((child) => {
        const el = child as HTMLElement;
        if ('staggerIgnore' in el.dataset) {
            delete el.dataset.staggerIgnore;
        } else {
            setCustomProperties(el, { i });
            i++;
        }
    })
}

const querySelector = (options: Partial<Options> = {}) => {
    const elements = Array.from(document.querySelectorAll('[data-stagger]'));
    elements.forEach(element => init(element as HTMLElement, options));
}


function stagger(options?: Partial<Options>): void;
function stagger(element: HTMLElement, options?: Partial<Options>): void;
function stagger(...args: any[]): void {
    if (args.length <= 1) querySelector(...args);
    else init(args[0], args[1]);
}

export default stagger;