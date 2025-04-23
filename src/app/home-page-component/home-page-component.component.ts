import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home-page-component',
  imports: [FormsModule,CommonModule],
  templateUrl: './home-page-component.component.html',
  styleUrl: './home-page-component.component.css'
})
export class HomePageComponentComponent {
  pseudo: string = "";

  constructor(private userService: UserService) {}

  newUser() {
    this.userService.setPseudo(this.pseudo);
  }

}
