import { Component, ViewChild } from '@angular/core';
import { CarbonFootprintResultComponent } from '../carbon-footprint-result/carbon-footprint-result.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carbon-footprint-form',
  imports: [CarbonFootprintResultComponent, FormsModule, CommonModule],
  templateUrl: './carbon-footprint-form.component.html',
  styleUrl: './carbon-footprint-form.component.css'
})
export class CarbonFootprintFormComponent {
  a: number | null = null;
  b: number | null = null;
  result: number | null = null; 

  @ViewChild('resultComp') resultComponent!: CarbonFootprintResultComponent;

  calculate() {
    this.result = Number(this.a) + Number(this.b);
    console.log("a " +this.a)
    console.log("b " +this.b)
    console.log("total " + this.result)

    this.resultComponent.displayResult(this.result);
  }

}
