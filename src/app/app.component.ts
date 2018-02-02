import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuthenticationService } from './common/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  private menuItemsArray: any[] = [
    { 'title': 'Домой', 'routerLink': '/' },
    { 'title': 'Наша выпечка', 'routerLink': '/menu' },
    { 'title': 'Статьи', 'routerLink': '/articles' },
    { 'title': 'О нас', 'routerLink': '/about' },
    { 'title': 'Контакты', 'routerLink': '/contacts' },
    { 'title': 'Корзина', 'routerLink': '/bitbucket' },
  ];

  constructor(private router: Router, private location: Location, public authService: AuthenticationService) {

  }

  public onMenuClose() {
    console.log('menu closed');
  }
  public onMenuOpen() {
    console.log('menu Opened');
  }
  private onItemSelect(item: any) {
    console.log(item);
    if (item.routerLink) {
      this.router.navigate([item.routerLink]);
    }
  }

}

