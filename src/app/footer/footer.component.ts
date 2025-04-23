import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  now: Date = new Date();
  formattedDate: string = this.now.toLocaleDateString('fr-FR'); 


}
