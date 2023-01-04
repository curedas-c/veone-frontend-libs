import { delay, of } from "rxjs";
/**
 * A combination of `delay` and `of` rxjs Operators.
 * 
 * Suitable for unit test when you want to return a value after a certain time.
 *
 * ## Example
 *
 * Emit a string after 5 seconds
 *
 * ```ts
 * import { ofDelay } from 'ngx-veone';
 *
 * const nameAfterDelay = ofDelay('Richard', 5000);
 * nameAfterDelay.subscribe(x => console.log(x));
 * ```
 *
 *
 * @param data Value to be returned as an Observable.
 * @param millisecondsDelay time to wait before emission. (defaults to 2500ms)
 * @return An observable that emit after the specified time is elapsed..
 */
export const ofDelay = <T>(data: T, millisecondsDelay = 2500) =>
  of<T>(data).pipe(delay(millisecondsDelay));