import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-carbon-footprint-result',
  imports: [CommonModule],
  templateUrl: './carbon-footprint-result.component.html',
  styleUrl: './carbon-footprint-result.component.css'
})
export class CarbonFootprintResultComponent {
  result: number | null = null;

  displayResult(value: number) {
    this.result = value;
  }
}
