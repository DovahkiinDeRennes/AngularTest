import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePageComponentComponent } from './home-page-component/home-page-component.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarbonFootprintComponent } from './carbon-footprint/carbon-footprint.component';
import { RouterModule, Routes } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [RouterOutlet,HeaderComponent,FooterComponent,CarbonFootprintComponent,RouterModule, HeaderComponent],
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

