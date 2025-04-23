import { Component } from '@angular/core';
import { CarbonFootprintFormComponent } from '../carbon-footprint-form/carbon-footprint-form.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-carbon-footprint',
  imports: [CarbonFootprintFormComponent, CommonModule, FormsModule],
  templateUrl: './carbon-footprint.component.html',
  styleUrl: './carbon-footprint.component.css'
})
export class CarbonFootprintComponent {


  distanceKm : number = 200;
  consommationPour100Km : number = 2.5;


  consommationTotal:number = (this.distanceKm * this.consommationPour100Km)/100;

  voyages = [
    { distanceKm: 50, consommationPour100Km: 5 },
    { distanceKm: 150, consommationPour100Km: 6 },
    { distanceKm: 250, consommationPour100Km: 7 },
    { distanceKm: 350, consommationPour100Km: 8 },
    { distanceKm: 450, consommationPour100Km: 9 }
]

getNombreDeVoyages(): number {
  return this.voyages.length;
}

getMoyenneConsommation(): number {
  let totalVoyage = this.voyages.length;
  let totalConsommation = 0; 
  
  for (let voyage of this.voyages) {
    totalConsommation += voyage.consommationPour100Km;
  }
  
  return totalConsommation / totalVoyage;
}

newVoyage = {
  distanceKm: 0,
  consommationPour100Km: 0
};



ajouterVoyage() {
   
    this.voyages.push({
      distanceKm: this.newVoyage.distanceKm,
      consommationPour100Km: this.newVoyage.consommationPour100Km
    });

   
    this.newVoyage = { distanceKm: 0, consommationPour100Km: 0 };
  
  
}

  
  add100km(){
    this.distanceKm += 100;
    console.log( this.distanceKm + 100)
  }
  del100km(){
    this.distanceKm -= 100;
    console.log( this.distanceKm - 100)
  }
}
