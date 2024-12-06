import { Component, OnInit } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
// import { HomeComponent } from '../home/home.component';
import { CommonModule } from '@angular/common';
// import { AboutComponent } from "../about/about.component";
import { FormPageComponent } from "../contact/contact.component";
import { ServiceComponent } from "../service/service.component";
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';



@Component({
  selector: 'app-header',
  standalone:true,
  imports: [NzLayoutModule,NzInputModule, NzIconModule,NzGridModule, CommonModule,FormsModule, NzAvatarModule, NzMenuModule, FormPageComponent,ServiceComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  showEditForm = false;
  showForms = false;

  
  closeEditForm() {
    this.showForms = false; // Toggle the form visibility
  }

  toggleForm(): void {
    this.showEditForm = !this.showEditForm;
  }

  toggleForms(): void {
    this.showForms = !this.showForms;
  }

  handleSubmit(): void {
    this.showEditForm = false; 
  }

  handleSubmits(): void {
    this.showForms = false; 
  }

  // handleSubmits() {
  //   console.log('Form submitted');
  //   this.toggleForm(); 
  // }

}
