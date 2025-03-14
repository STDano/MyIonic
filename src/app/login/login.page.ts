import { Component, OnInit } from '@angular/core';
import { User } from 'src/model/user.model';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  users: User[];

  constructor(private alertController: AlertController) {
    this.users = [
      new User('Sasha', 'sasha@email.com', 'styd022503'),
      new User('user', 'user@email.com', 'password'),
      new User('default', 'default@email.com', '1234'),
    ];
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create ({
      header,
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }
  
  username: string | null = null;
  password: string | null = null;

  async login(username: string | undefined | null, password: string | undefined | null) {
    const validUser = this.users.some(user => 
      user.getUsername === username && user.getPassword === password
    );
  
    if (validUser) {
      const loggedInUser = this.users.find(user => 
        user.getUsername === username && user.getPassword === password
      );
  
      if (loggedInUser) {
        await this.showAlert('Login successful!', `Thanks for coming, ${loggedInUser.getUsername}`);
        console.log('Username:', loggedInUser.getUsername);
        console.log('Email:', loggedInUser.getEmail);
        console.log('Password:', loggedInUser.getPassword);
      }
    } else {
      await this.showAlert('Login Failed!', 'Invalid username or password');
      console.log('Login unsuccessful');
    }
  }

  ngOnInit() {
  }

}

