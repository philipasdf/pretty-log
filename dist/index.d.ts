declare class ChainableLogger {
    private isRed;
    private isGreen;
    private isXl;
    constructor();
    private resetAll;
    private getSize;
    private getColor;
    /**
     * @description sets the color of the log message to red
     * @returns ChainableLogger
     */
    r(): ChainableLogger;
    /**
     * @description sets the color of the log message to green
     * @returns ChainableLogger
     */
    g(): ChainableLogger;
    /**
     * @description sets the size of the log message to xl
     * @returns ChainableLogger
     */
    xl(): ChainableLogger;
    /**
     * @description logs a message to the console. Use it at the end of the chain
     * @param object you can pass any object to log. If you pass a string, it will be used as a custom message
     * @param customMessage you can pass a custom message to log
     */
    log(object?: any, customMessage?: string): void;
    line(): void;
}
declare const L: ChainableLogger;
declare const LL: ChainableLogger;
declare const PL: ChainableLogger;
declare const PP: ChainableLogger;
/**
 *
 * @description ChainableLogger instance
 */
export { L, LL, PL, PP };
/**
 * alias for ChainableLogger.log()
 */
export declare const r: () => ChainableLogger;
export declare const g: () => ChainableLogger;
export declare const xl: () => ChainableLogger;
export declare const log: (object?: any, customMessage?: string) => void;
