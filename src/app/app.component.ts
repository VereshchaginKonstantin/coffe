import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  private menuItemsArray: any[] = [
    { "title": "Electricity", "link": "#" },
    { "title": "Mobile Bill", "link": "#" },
    {
      "title": "Home and Kitchen", "link": "#",
      "subItems": [
        { "title": "Furniture", "link": "#" },
        { "title": "Cookware", "link": "#" },
      ]
    },
    {
      "title": "Car and Bike Accessories", "link": "#",
      "subItems": [
        { "title": "Tyres and Alloys", "link": "#" },
        { "title": "Comfort and Safety", "link": "#" },
      ]
    },
  ];

  constructor(private router: Router, private location: Location) {

  }

  public onMenuClose() {
    console.log("menu closed");
  }
  public onMenuOpen() {
    console.log("menu Opened");
  }
  private onItemSelect(item: any) {
    console.log(item);
    if (item.routerLink) {
      this.router.navigate([item.routerLink]);
    }
  }

}

