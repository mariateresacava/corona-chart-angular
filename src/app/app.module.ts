import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProvinceService } from './service/province.service';
import { MessageService } from './service/message.service';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  imports:      [ BrowserModule, FormsModule, MDBBootstrapModule.forRoot(), HttpClientModule, MatButtonModule, MatIconModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ProvinceService, MessageService]
})
export class AppModule { }
