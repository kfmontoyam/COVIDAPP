import { Component } from '@angular/core';
import { ApiCovidService } from '../services/api-covid.service';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {

  dataNews;
  constructor(private myApi: ApiCovidService ) {
  }

  ngOnInit(){
    this.myApi.getLinesnoticia().subscribe(resp=>{
    this.dataNews = resp.articles;
    })
    
  }
}
