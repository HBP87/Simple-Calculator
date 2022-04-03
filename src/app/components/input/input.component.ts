import { Component, OnInit } from "@angular/core";
import * as math from "mathjs";
import { CalculatorService } from "src/app/calculator.service";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.css"],
})
export class InputComponent implements OnInit {
  input: string = "";
  constructor(private cal: CalculatorService) {}
  ngOnInit(): void {}
  append(x: any) {
    this.input += x;
    this.cal.result = this.input;
  }
  result() {
    this.cal.eval(this.input);
    this.input = "";
  }
  clearScreen() {
    this.cal.result = "";
    this.input = "";
  }
}
