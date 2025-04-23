import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarbonFootprintComputeService {

  constructor() { }


  calculeCO2(distanceKm: number, consommationPour100Km: number): number {
    return (distanceKm * consommationPour100Km) / 100 * 2.3;
  }

  // Tu déclares le tableau en appelant directement calculeCO2
  voyages = [
    {
      distanceKm: 50,
      consommationPour100Km: 5,
      quantiteCO2: this.calculeCO2(50, 5)
    },
    {
      distanceKm: 150,
      consommationPour100Km: 6,
      quantiteCO2: this.calculeCO2(150, 6)
    },
    {
      distanceKm: 250,
      consommationPour100Km: 7,
      quantiteCO2: this.calculeCO2(250, 7)
    },
    {
      distanceKm: 350,
      consommationPour100Km: 8,
      quantiteCO2: this.calculeCO2(350, 8)
    },
    {
      distanceKm: 450,
      consommationPour100Km: 9,
      quantiteCO2: this.calculeCO2(450, 9)
    }
  ];


  getVoyages(){
    return this.voyages;
  }


  newVoyage = {
    distanceKm: 0,
    consommationPour100Km: 0,
    quantiteCO2: 0
  };
  
  
  
  addVoyage(newVoyage: { distanceKm: number; consommationPour100Km: number; quantiteCO2: number }) {
    this.voyages.push({
      distanceKm: newVoyage.distanceKm,
      consommationPour100Km: newVoyage.consommationPour100Km,
      quantiteCO2: this.calculeCO2(
        newVoyage.distanceKm,
        newVoyage.consommationPour100Km
      )
    });
  }


  getMoyenneQuantiteCO2(): number {
    let totalVoyage = this.voyages.length;
    let totalQuantiteCO2 = 0; 
    
    for (let voyage of this.voyages) {
      totalQuantiteCO2 += voyage.quantiteCO2;
    }
    
    return totalQuantiteCO2 / totalVoyage;
  }
  
  getMoyenneDistance(): number {
    let totalVoyage = this.voyages.length;
    let totalKm = 0; 
    
    for (let voyage of this.voyages) {
      totalKm += voyage.distanceKm;
    }
    
    return totalKm / totalVoyage;
  }
  
  getMoyenneConsommation(): number {
    let totalVoyage = this.voyages.length;
    let totalConsommation = 0; 
    
    for (let voyage of this.voyages) {
      totalConsommation += voyage.consommationPour100Km;
    }
    
    return totalConsommation / totalVoyage;
  }

}
