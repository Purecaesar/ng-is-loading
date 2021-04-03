import {map} from 'rxjs/operators';
import {StaticLoadingService} from '../services/static-loading.service';
import {Observable} from 'rxjs';

export function IsLoading(namesArray?: string[]): (target: any, key: string) => void {
  return (target: any, key: string) => {
    const name: string = key.toString();
    const selectorId = `__${name}__isLoading`;

    Object.defineProperties(target, {
      [name]: {
        enumerable: true,
        configurable: true,
        get(): Observable<boolean> {
          if (this[selectorId]) {
            return this[selectorId];
          }

          if (namesArray?.length) {
            return this[selectorId] = StaticLoadingService.service.status$
              .pipe(map(status => namesArray.some(requestName => status[requestName])));
          }

          return this[selectorId] = StaticLoadingService.service.isLoading$;
        }
      }
    });
  };
}
