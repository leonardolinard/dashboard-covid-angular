import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard.component';
import { DadosService } from './services';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DashboardComponent
  ],
  providers: [
    DadosService
  ]
})
export class DashboardModule { }
