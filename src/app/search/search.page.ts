import { Component, OnInit } from '@angular/core';
import { User } from 'src/model/user.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  users: User[] = [
    new User('user123', 'user123@example.com', 'Passw0rd!'),
    new User('jane_doe', 'jane.doe@example.com', 'Qwerty123!'),
    new User('john_smith', 'john.smith@example.com', 'MySecureP@ss1'),
    new User('test_user', 'test.user@example.com', 'Testing123!'),
    new User('alice_wonder', 'alice.wonder@example.com', 'Wonderland2024!')
  ];

  searchedUsers: User[] = [...this.users];
  searchString: string = '';

  constructor() { }

  ngOnInit() {
    console.log(this.users);
  }

  onSearchList() {
    const search = this.searchString.trim();
    
    if (search.length >= 3) {
      this.searchedUsers = this.users.filter(user => {
        return user._username.toLowerCase().includes(search.toLowerCase());
      });
    } else {
      this.searchedUsers = [...this.users];
    }
  }
  

}
