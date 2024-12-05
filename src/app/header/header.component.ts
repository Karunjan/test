import { Component, OnInit } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
// import { HomeComponent } from '../home/home.component';
import { CommonModule } from '@angular/common';
// import { AboutComponent } from "../about/about.component";
import { FormPageComponent } from "../contact/contact.component";
// import { ServiceComponent } from "../service/service.component";




@Component({
  selector: 'app-header',
  standalone:true,
  imports: [NzLayoutModule, NzIconModule, CommonModule, NzMenuModule, FormPageComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
