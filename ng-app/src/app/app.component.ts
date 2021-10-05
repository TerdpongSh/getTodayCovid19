import { Component, Inject, OnInit } from '@angular/core';
import { GetTodayCasesService } from './service/get-today-cases.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Today Covid Case';
  todayCasesData: any
  get Confirmed() { return (this.todayCasesData && this.todayCasesData.Confirmed) ? this.todayCasesData.Confirmed : null }
  get Deaths() { return (this.todayCasesData && this.todayCasesData.Deaths) ? this.todayCasesData.Deaths : null }
  get Hospitalized() { return (this.todayCasesData && this.todayCasesData.Hospitalized) ? this.todayCasesData.Hospitalized : null }
  get Recovered() { return (this.todayCasesData && this.todayCasesData.Recovered) ? this.todayCasesData.Recovered : null }
  
  get NewConfirmed() { return Math.abs((this.todayCasesData && this.todayCasesData.NewConfirmed) ? this.todayCasesData.NewConfirmed : null) }
  get NewDeaths() { return Math.abs((this.todayCasesData && this.todayCasesData.NewDeaths) ? this.todayCasesData.NewDeaths : null) }
  get NewHospitalized() { return Math.abs((this.todayCasesData && this.todayCasesData.NewHospitalized) ? this.todayCasesData.NewHospitalized : null) }
  get NewRecovered() { return Math.abs((this.todayCasesData && this.todayCasesData.NewRecovered) ? this.todayCasesData.NewRecovered : null) }
  
  get signNC() { return (this.todayCasesData && this.todayCasesData.NewConfirmed) ? (this.todayCasesData.NewConfirmed >=0 ? "+ ":"- ") : null }
  get signND() { return (this.todayCasesData && this.todayCasesData.NewDeaths) ? (this.todayCasesData.NewDeaths >=0 ? "+ ":"- ") : null }
  get signNH() { return (this.todayCasesData && this.todayCasesData.NewHospitalized) ? (this.todayCasesData.NewHospitalized >=0 ? "+ ":"- ") : null }
  get signNR() { return (this.todayCasesData && this.todayCasesData.NewRecovered) ? (this.todayCasesData.NewRecovered >=0 ? "+ ":"- ") : null }


  get UpdateDate() { return (this.todayCasesData && this.todayCasesData.UpdateDate) ? this.todayCasesData.UpdateDate : null }

  constructor(
    private getTodayCasesService: GetTodayCasesService) {

    this.getTodayCasesService.getTodayCases().subscribe((data) => {
      this.todayCasesData = data
      //console.log(this.todayCasesData);
    })
  }

  ngOnInit(): void {
    // 
  }
}
