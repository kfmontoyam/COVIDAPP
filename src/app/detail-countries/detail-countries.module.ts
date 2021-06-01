import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { IonicModule } from '@ionic/angular';
import { DetailCountriesPageRoutingModule } from './detail-countries-routing.module';
import { DetailCountriesPage } from './detail-countries.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailCountriesPageRoutingModule, 
    Ng2SearchPipeModule
  ],
  declarations: [DetailCountriesPage]
})
export class DetailCountriesPageModule {}
