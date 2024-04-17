import {inject} from '@angular/core';
import {LoadingService} from '../services/loading.service';
import {toSignal} from '@angular/core/rxjs-interop';
import {map} from 'rxjs/operators';

export const isLoading = (namesArray?: string[]) => {
  const loadingService = inject(LoadingService);

  if (!namesArray?.length) {
    return toSignal(loadingService.isLoading$);
  }

  return toSignal<boolean>(loadingService.status$
    .pipe(map(status => namesArray.some(requestName => status[requestName]))));
};
