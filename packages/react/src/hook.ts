import { useEffect, RefObject } from 'react';
import stagger, { Options } from '@stagger/core';

export default function useStagger(ref: RefObject<HTMLElement | null>, opts: Partial<Options> = {}, deps: any[] = []) {
    useEffect(() => {
        const node = ref.current;
        if (!node) return;
        stagger(node, opts);
    }, [ref, ...deps]);
}