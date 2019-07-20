interface Options {
    unit?: string;
}
interface Properties {
    [property: string]: string | number | null
}
export const setCustomProperties = (element: HTMLElement, properties: Properties, options: Options = {}) => {
    const { unit = '' } = options;
    for (const [property, value] of Object.entries(properties)) {
        if (!toStr(value)) return;
        if (typeof value === 'number' && value === 0 && unit) return;
        if (typeof value === 'string' && value.startsWith('0')) return;

        element.style.setProperty(customProperty(property), toStr(value, unit));
    }
}
const customProperty = (property: string) => property.startsWith('--') ? property : `--${property}`;
const hasUnit = (value: string | number | null) => {
    if (value === null) return false;
    value = value.toString();
    const lastChar = value[value.length - 1];
    return /\D/.test(lastChar);
}
const toStr = (value: string | number | null, unit: string = '') => {
    if (value === null) return null;
    if (hasUnit(value)) return value.toString();
    return value.toString() + unit;
}