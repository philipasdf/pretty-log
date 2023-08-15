"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = exports.xl = exports.g = exports.r = exports.PP = exports.PL = exports.LL = exports.L = void 0;
class ChainableLogger {
    constructor() {
        this.isRed = false;
        this.isGreen = false;
        this.isXl = false;
    }
    resetAll() {
        this.isRed = false;
        this.isGreen = false;
        this.isXl = false;
    }
    getSize() {
        if (this.isXl) {
            return 'font-size: 20px;';
        }
        return 'font-size: 12px;';
    }
    getColor() {
        if (this.isRed) {
            return 'background: #ff0000; color: #ffffff';
        }
        if (this.isGreen) {
            return 'background: #222; color: #00ff44';
        }
        return 'background: #fffb00; color: #222';
    }
    /**
     * @description sets the color of the log message to red
     * @returns ChainableLogger
     */
    r() {
        this.isRed = true;
        return this;
    }
    /**
     * @description sets the color of the log message to green
     * @returns ChainableLogger
     */
    g() {
        this.isGreen = true;
        return this;
    }
    /**
     * @description sets the size of the log message to xl
     * @returns ChainableLogger
     */
    xl() {
        this.isXl = true;
        return this;
    }
    /**
     * @description logs a message to the console. Use it at the end of the chain
     * @param object you can pass any object to log. If you pass a string, it will be used as a custom message
     * @param customMessage you can pass a custom message to log
     */
    log(object, customMessage) {
        if (typeof object === 'string') {
            customMessage = object;
        }
        const color = this.getColor();
        const size = this.getSize();
        const message = customMessage !== null && customMessage !== void 0 ? customMessage : 'test';
        if (object && typeof object !== 'string') {
            console.log('%c ' + message + ' ', size + color, object);
        }
        else {
            console.log('%c ' + message + ' ', size + color);
        }
        this.resetAll();
    }
    line() {
        console.log('------------------------------------------------');
    }
}
const L = new ChainableLogger();
exports.L = L;
const LL = new ChainableLogger();
exports.LL = LL;
const PL = new ChainableLogger();
exports.PL = PL;
const PP = new ChainableLogger();
exports.PP = PP;
/**
 * alias for ChainableLogger.log()
 */
exports.r = L.r.bind(L);
exports.g = L.g.bind(L);
exports.xl = L.xl.bind(L);
exports.log = L.log.bind(L);
