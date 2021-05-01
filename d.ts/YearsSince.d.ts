import * as React from 'react';
interface t {
    i?: number;
}
export default class TimeSince extends React.Component<{
    /**
     * @name time
     * @description UNIX timestamp to get years since
     * @type {number}
     */
    time: number;
    /**
     * @name precision
     * @description The precision of the number
     * @type {number}
     * @default 1
     */
    precision?: number;
    /**
     * @name className
     * @description Additional ClassNames
     * @type {string}
     * @default ''
     */
    className?: string;
    /**
     * @name style
     * @description An array of styles
     * @type {React.CSSProperties}
     * @default {}
     */
    style?: React.CSSProperties;
}, t> {
    text: string;
    timer: any;
    constructor(props: any);
    getText(): string;
    tick(): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=YearsSince.d.ts.map