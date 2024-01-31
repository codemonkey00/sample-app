import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatIcon } from '@angular/material/icon';
import { faHouse, faUsersGear, faBuildingUser } from '@fortawesome/free-solid-svg-icons';

import { Theme } from '../../../core/enums/enums';
import { ThemingService } from '../../../core/services/theming.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements OnInit {

  private _themes = Object.values(Theme);

  currentTheme: string = '';

  _faHouse = faHouse;
  _faUsersGear = faUsersGear;
  _faBuildingUser = faBuildingUser;

  constructor(private _themingService: ThemingService) {

    console.log('theme service: ', this._themingService.currentTheme);
    this.currentTheme = this._themingService.currentTheme;
  }

  ngOnInit() {
  }

  public setNextTheme(): void {
    const current: number = this._themes.indexOf(
      this._themingService.currentTheme
    );

    const next: Theme =
      this._themes[(current + this._themes.length + 1) % this._themes.length];
    this._themingService.setTheme(next);
    console.log('next', next);
    this.currentTheme = next;
  }

  public setPrevTheme(): void {
    const current: number = this._themes.indexOf(
      this._themingService.currentTheme
    );

    const previous: Theme =
      this._themes[(current + this._themes.length - 1) % this._themes.length];
    this._themingService.setTheme(previous);
    this.currentTheme = previous;
  }
}
