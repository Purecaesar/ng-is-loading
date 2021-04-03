import {Injectable} from '@angular/core';
import {LoadingService} from './loading.service';

@Injectable()
export class StaticLoadingService {
  public static service: LoadingService;

  constructor(loading: LoadingService) {
    StaticLoadingService.service = loading;
  }
}
