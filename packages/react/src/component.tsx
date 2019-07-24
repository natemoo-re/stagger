import * as React from 'react';
import { Options } from '@stagger/core';
import useStagger from './hook';

const Stagger: React.FunctionComponent<Partial<Options> & { as?: any }> = props => {
    const { as: Element = 'div', children, ...opts } = props;
    const ref = React.useRef(null);
    useStagger(ref, opts, [children]);

    return <Element ref={ref}>{children}</Element>;
}

export default Stagger;