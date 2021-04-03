import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class LoadingService {
  private readonly _loadingSubj$ = new BehaviorSubject<{ [k: string]: boolean }>({});

  public readonly status$ = this._loadingSubj$.asObservable();
  public readonly isLoading$ = this._loadingSubj$.pipe(
    map(state => Object.values(state).some(v => v))
  );

  public setLoading(name: string): void {
    this._loadingSubj$.next({...this._loadingSubj$.value, [name]: true});
  }

  public removeLoading(name: string): void {
    this._loadingSubj$.next({...this._loadingSubj$.value, [name]: false});
  }
}
