import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzRadioModule } from 'ng-zorro-antd/radio';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [NzCarouselModule, NzRadioModule, FormsModule, CommonModule], // Include CommonModule here
})
export class HomeComponent {
  dotPosition: string = 'bottom'; // Controls the position of carousel dots
  images = [
    './assets/images/slider4.jpg',
    './assets/images/slider2.jpg',
    './assets/images/slider3.jpg',
    './assets/images/1.jpg'
  ]; // Array of image URLs
}
