import {Observable} from 'rxjs';
import {finalize} from 'rxjs/operators';

import {StaticLoadingService} from '../services/static-loading.service';
import {subscribeCallback} from '../functions/subscribe-callback-operator';

export function Loading(name?: string): (target: any, key: string, desc: any) => void {
  return (target: any, key: string, desc: any) => {
    const origFn = desc.value;
    const loadingName = name || `__${key}__${target.constructor.name}`;

    desc.value = function(...rest: any[]) {
      const fnReturnValue = origFn.call(this, ...rest);

      if (!(fnReturnValue instanceof Observable)) {
        throw new Error(`Method doesn't return observable`);
      }

      return fnReturnValue.pipe(
        subscribeCallback(() =>
          StaticLoadingService.service.setLoading(loadingName)
        ),
        finalize(() => StaticLoadingService.service.removeLoading(loadingName))
      );
    };
  };
}
