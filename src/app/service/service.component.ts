import { Component, OnInit } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [
    NzLayoutModule,
    NzAvatarModule,
    NzButtonModule,
    NzSwitchModule,
    NzIconModule,
    NzMenuModule,
    CommonModule,
    NzToolTipModule,
    FormsModule,
  ],

  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],
})
export class ServiceComponent {
  theme = true;
  isCollapsed = false;

  toggleSidebar(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
