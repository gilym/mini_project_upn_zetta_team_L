import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'mini_project_upn_zetta_team_L';

  links = [{name: 'Home', url: '/'}, {name: 'Menu', url: 'menu'}, {name:"Login", url:'login'}, {name:"Cart", url:'cart'}];
  activeLink = this.links[0].name;

  constructor(private router: Router){}

  route(param: {name: string, url: string}) {
    this.activeLink = param.name
    this.router.navigate([param.url]);
  }
}
