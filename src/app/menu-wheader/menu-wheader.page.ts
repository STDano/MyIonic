import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular'

@Component({
  selector: 'app-menu-wheader',
  templateUrl: './menu-wheader.page.html',
  styleUrls: ['./menu-wheader.page.scss'],
})
  
export class MenuWheaderPage implements OnInit {
  menuOpen = false;
  
  constructor(private menuCtrl: MenuController) {}

  ngOnInit() {
  }
  
  
  async toggleMenu() {
    if (this.menuOpen) {
      await this.menuCtrl.close(); // Close the menu
    } else {
      await this.menuCtrl.open(); // Open the menu
    }
    this.menuOpen = !this.menuOpen; // Toggle the state
  }
}
