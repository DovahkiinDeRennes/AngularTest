import { Component } from '@angular/core';
import { CarbonFootprintFormComponent } from '../carbon-footprint-form/carbon-footprint-form.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarbonFootprintComputeService } from '../carbon-footprint-compute.service';

@Component({
  selector: 'app-carbon-footprint',
  imports: [CarbonFootprintFormComponent, CommonModule, FormsModule],
  templateUrl: './carbon-footprint.component.html',
  styleUrl: './carbon-footprint.component.css'
})
export class CarbonFootprintComponent {

  voyages: any[] = [];

  quantiteCO2: number;

  moyenneDistanceKm : number;

  moyenneConsomation : number;

  moyenneC02 : number;

   randomDistanceKm = Math.floor(Math.random() * 1000) + 1;
   randomConsommation = (Math.random() * (10 - 3) + 3).toFixed(2);

  newVoyage = {
    distanceKm: this.randomDistanceKm,
    consommationPour100Km: parseFloat(this.randomConsommation),
    quantiteCO2: 0
  };

  private addVoyages: any;

  constructor(private carbonFootprintComputeService : CarbonFootprintComputeService) { 
    this.voyages = this.carbonFootprintComputeService.getVoyages();

    this.moyenneDistanceKm = this.carbonFootprintComputeService.getMoyenneDistance();
    this.moyenneConsomation = this.carbonFootprintComputeService.getMoyenneConsommation();
    this.moyenneC02 = this.carbonFootprintComputeService.getMoyenneQuantiteCO2();
    this.quantiteCO2 = this.carbonFootprintComputeService.calculeCO2(this.distanceKm, this.consommationPour100Km);
  }

  distanceKm : number = 200;
  consommationPour100Km : number = 2.5;


  consommationTotal:number = (this.distanceKm * this.consommationPour100Km)/100;

  

getNombreDeVoyages(): number {
  return this.voyages.length;
}




loadVoyages(): void {
  this.voyages = this.carbonFootprintComputeService.getVoyages();
  this.moyenneDistanceKm = this.carbonFootprintComputeService.getMoyenneDistance();
  this.moyenneConsomation = this.carbonFootprintComputeService.getMoyenneConsommation();
  this.moyenneC02 = this.carbonFootprintComputeService.getMoyenneQuantiteCO2();
  this.quantiteCO2 = this.carbonFootprintComputeService.calculeCO2(this.distanceKm, this.consommationPour100Km);
}
ajouterVoyage(): void {

  this.newVoyage.quantiteCO2 = this.carbonFootprintComputeService.calculeCO2(
    this.newVoyage.distanceKm,
    this.newVoyage.consommationPour100Km
  );

  
  this.carbonFootprintComputeService.addVoyage(this.newVoyage);


  this.randomDistanceKm = Math.floor(Math.random() * 1000) + 1;
  this.randomConsommation = (Math.random() * (10 - 3) + 3).toFixed(2);

  this.newVoyage = {
    distanceKm: this.randomDistanceKm,
    consommationPour100Km: parseFloat(this.randomConsommation),
    quantiteCO2: 0
  };

  // 4. Mise à jour de l'affichage
  this.loadVoyages();
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
