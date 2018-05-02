import {ModuleWithProviders, NgModule} from '@angular/core';
import {
  BaImageLoaderService,
  BaThemePreloader,
  BaThemeSpinner
} from './service';
const Theme_service=[
  BaImageLoaderService,
  BaThemePreloader,
  BaThemeSpinner
];
@NgModule({
  imports: [],
  declarations:[],
  providers:[],
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule:ThemeModule,
      providers:[...Theme_service]
    }
  }
}
