import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCovidService } from '../services/api-covid.service';
@Component({
  selector: 'app-detail-countries',
  templateUrl: './detail-countries.page.html',
  styleUrls: ['./detail-countries.page.scss'],
})
export class DetailCountriesPage implements OnInit {

  countries;
  countriesBackup: any[];
  constructor(private router: Router, 
              private myApi: ApiCovidService) 
  {

   }

  ngOnInit() {
    this.myApi.getLines().subscribe(resp=>{
    this.countries = resp.Countries;
  });
  }

  back(){
    this.router.navigate(['/tabs/home']);
  }

}
