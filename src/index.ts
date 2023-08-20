class ChainableLogger {
  private isRed: boolean = false;
  private isGreen: boolean = false;
  private isXl: boolean = false;

  constructor() {}

  private resetAll() {
    this.isRed = false;
    this.isGreen = false;
    this.isXl = false;
  }

  private getSize(): string {
    if (this.isXl) {
      return 'font-size: 20px;';
    }

    return 'font-size: 12px;';
  }

  private getColor() {
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
  public r(): ChainableLogger {
    this.isRed = true;
    return this;
  }

  /**
   * @description sets the color of the log message to green
   * @returns ChainableLogger
   */
  public g(): ChainableLogger {
    this.isGreen = true;
    return this;
  }

  /**
   * @description sets the size of the log message to xl
   * @returns ChainableLogger
   */
  public xl(): ChainableLogger {
    this.isXl = true;
    return this;
  }

  /**
   * @description logs a message to the console. Use it at the end of the chain
   * @param object you can pass any object to log. If you pass a string, it will be used as a custom message
   * @param customMessage you can pass a custom message to log
   */
  public log(object?: any, customMessage?: string) {
    if (typeof object === 'string') {
      customMessage = object;
    }

    const color = this.getColor();
    const size = this.getSize();
    const message = customMessage ?? 'test';

    if (object !== undefined && typeof object !== 'string') {
      console.log('%c ' + message + ' ', size + color, object);
    } else {
      console.log('%c ' + message + ' ', size + color);
    }

    this.resetAll();
  }
}

const L = new ChainableLogger();
const LL = new ChainableLogger();
const PL = new ChainableLogger();
const PP = new ChainableLogger();

/**
 *
 * @description ChainableLogger instance
 */
export { L, LL, PL, PP };

/**
 * alias for ChainableLogger.log()
 */
export const r = L.r.bind(L);
export const g = L.g.bind(L);
export const xl = L.xl.bind(L);
export const log = L.log.bind(L);

export function line() {
  console.log('================================================');
}

export function tableFlip() {
  L.log('(╯°□°）╯︵ ┻━┻');
}

export function tableUnflip() {
  L.log('┬─┬ ノ( ゜-゜ノ)');
}

export function middleFinger() {
  L.log('🖕（︶︿︶）🖕');
}
