import { Component, DoCheck, OnInit } from '@angular/core';
import { CalculatorService } from 'src/app/calculator.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})
export class DisplayComponent implements OnInit, DoCheck {
  display: string = '';
  constructor(private cal: CalculatorService) {}

  ngOnInit(): void {}
  ngDoCheck(): void {
    this.display = this.cal.result;
  }
}
