import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCovidService } from '../services/api-covid.service';
import { LoadingController } from '@ionic/angular';
import { OrderPipe} from 'ngx-order-pipe';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  total;
  countries;
  TotalConfirmed:number;
  TotalDeaths:number;
  TotalRecovered:number;
  NewConfirmed:number;
  NewDeaths:number;
  NewRecovered:number;
  Confirmed:number;
  Deaths:number;
  Recovered:number;

  constructor(private router: Router, 
              private myApi: ApiCovidService, 
              public loadingController: LoadingController, 
              private orderPipe: OrderPipe) {

  }

  detailcountries(){
    this.router.navigate(['/tabs/detail-countries'])
  }

  ngOnInit() {
      this.getTotal();    
  }

  async getTotal() {
    const loading = await this.loadingController.create({
      message: 'Cargando...'
    });
    await loading.present(); 

    this.myApi.getLines().subscribe(resp=>{
      this.TotalConfirmed = resp.Global.TotalConfirmed;
      this.TotalDeaths = resp.Global.TotalDeaths;
      this.TotalRecovered = resp.Global.TotalRecovered;
      this.NewConfirmed = resp.Global.NewConfirmed;
      this.NewDeaths = resp.Global.NewDeaths;
      this.NewRecovered = resp.Global.NewRecovered;

      this.myApi.getLines().subscribe(resp=>{ 
        this.total = resp.Countries;
      });

      this.myApi.getLines().subscribe(resp=>{ 
        this.countries = this.orderPipe.transform(resp.Countries,'TotalConfirmed',true);
        this.countries = this.countries.filter((item,index) => index <3);
      });

      loading.dismiss();
      });
  

  }

}
