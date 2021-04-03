import {defer, Observable} from 'rxjs';

export function subscribeCallback<T>(callback: () => void): (obs: Observable<T>) => Observable<T> {
  return (obs: Observable<T>): Observable<T> =>
    defer(() => {
      callback();
      return obs;
    });
}
