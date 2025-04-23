import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePageComponentComponent } from './home-page-component/home-page-component.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarbonFootprintComponent } from './carbon-footprint/carbon-footprint.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent,FooterComponent,CarbonFootprintComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demoAngular';

  ngOnChange(){
    console.log("ngOnChange")
  }

  ngOnInit(){
    console.log("ngOnInit")
  }

  ngOnDestroy(): void{
    console.log("ngOnDestroy")
  }

  ngAfterContentInit(){
    console.log("ngAfterContentInit")
  }
  
}

