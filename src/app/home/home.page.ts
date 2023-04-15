import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { BannerComponent } from './banner/banner.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, BannerComponent],
})
export class HomePage implements OnInit {

  slides: any[] = [];
  
  constructor() {}

  ngOnInit(): void {
    this.slides = [
      {banner: 'assets/dishes/11.jpeg'},
      {banner: 'assets/dishes/3.jpg'},
      {banner: 'assets/dishes/cab.jpg'},
    ];
  }

  
}
