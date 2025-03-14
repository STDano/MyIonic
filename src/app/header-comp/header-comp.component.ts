import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-header-comp',
  templateUrl: './header-comp.component.html',
  styleUrls: ['./header-comp.component.scss'],
})
export class HeaderCompComponent implements OnInit {

  constructor(
    private menu: MenuController,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
  }

  toggleMenu() {
    this.menu.toggle();
  }

  navigateTo(page: string) {
    switch (page) {
      case 'home':
        this.navCtrl.navigateRoot('/home');
        break;
      case 'article':
        this.navCtrl.navigateRoot('/article');
        break;
      case 'calculator':
        this.navCtrl.navigateRoot('/calculator');
        break;
      case 'login':
        this.navCtrl.navigateRoot('/login');
        break;
      case 'menu-wheader':
        this.navCtrl.navigateRoot('/menu-wheader');
        break;
      case 'search':
        this.navCtrl.navigateRoot('/search');this.toggleMenu();
        break;
      default:
        console.error('Unknown page:', page);
    }
  }  
}
