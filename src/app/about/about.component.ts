import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // For common directives
import { NzGridModule } from 'ng-zorro-antd/grid'; // For grid system
import { NzLayoutModule } from 'ng-zorro-antd/layout'; // For layout-related components

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  imports: [CommonModule, NzGridModule, NzLayoutModule], // Import required Ng-Zorro modules
})
export class AboutComponent {
  // Add any necessary logic or data here
}
