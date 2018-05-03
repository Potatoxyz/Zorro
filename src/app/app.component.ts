import { Component } from '@angular/core';
import {BaThemePreloader} from './theme/service/baThemePreloader';
import {BaThemeSpinner} from './theme/service/baThemeSpinner';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.sass']
})
export class AppComponent{
  title = 'app';
  constructor(private _spinner: BaThemeSpinner,){

  }
  public ngAfterViewInit(): void {
    BaThemePreloader.load().then((values) => {
      this._spinner.hide();
    });
  }
}
