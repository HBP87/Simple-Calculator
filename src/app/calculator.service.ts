import { Injectable } from "@angular/core";
import * as math from "mathjs";
@Injectable({
  providedIn: "root",
})
export class CalculatorService {
  result: string = "";
  constructor() {}
  eval(inp: string) {
    try {
      this.result = math.evaluate(inp);
    } catch (error) {
      this.result = "Wrong Syntax";
    }
  }
}
