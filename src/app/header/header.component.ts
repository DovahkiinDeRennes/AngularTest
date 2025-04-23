import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  pseudo: string = '';

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.pseudo$.subscribe(pseudo => {
      this.pseudo = pseudo;
    });
  }

}
