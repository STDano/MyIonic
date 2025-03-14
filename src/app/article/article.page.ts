import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-article',
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.scss'],
})
export class ArticlePage implements OnInit {

  constructor(private navCtrl: NavController) {}

  goToHomePage() {
    this.navCtrl.navigateBack('/home');
  }

  ngOnInit() {
  }

}
