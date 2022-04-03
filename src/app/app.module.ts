import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculatorService } from './calculator.service';
import { DisplayComponent } from './components/display/display.component';
import { InputComponent } from './components/input/input.component';

@NgModule({
  declarations: [AppComponent, DisplayComponent, InputComponent],
  imports: [BrowserModule, FormsModule],
  providers: [CalculatorService],
  bootstrap: [AppComponent],
})
export class AppModule {}
