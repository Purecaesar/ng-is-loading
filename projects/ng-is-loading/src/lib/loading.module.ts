import {ModuleWithProviders, NgModule} from '@angular/core';
import {LoadingService} from './services/loading.service';
import {StaticLoadingService} from './services/static-loading.service';

@NgModule({})
export class NgLoadingModule {
  constructor(_: StaticLoadingService) {
  }

  public static forRoot(): ModuleWithProviders<NgLoadingModule> {
    return {
      ngModule: NgLoadingModule,
      providers: [LoadingService, StaticLoadingService]
    };
  }
}
