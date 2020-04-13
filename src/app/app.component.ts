import { Component } from '@angular/core';
import { Province } from './model/province';
import { ProvinceService } from './service/province.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  provinces: Province[] = [];
  name = 'Corona Chart';

   constructor(private provinceService: ProvinceService) { }

   getProvincesByDate(): void {
    this.provinceService.getProvincesByDate()
      .subscribe(provinces => this.provinces);
  }
}
