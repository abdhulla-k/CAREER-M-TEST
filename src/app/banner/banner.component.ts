import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CareerDataService } from '../career-data.service';

import { Banner } from '../shared/models/banner';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit, OnDestroy {
  bannerSubscription$!: Subscription;
  currentImg!: string;
  banners!: Banner;
  counter = 0;

  constructor(
    private careerDataService: CareerDataService
  ) { }

  ngOnInit(): void {
    this.careerDataService.getBanner()
      .subscribe({
        next: (banner => {
          this.banners = banner;
          this.currentImg = this.banners?.banners[0].image;
          setTimeout(() => {
            this.counter++;
            this.counter = this.banners?.banners.length < this.counter ? 0 : this.counter;
            this.currentImg = this.banners?.banners[this.counter].image;
          }, 1000)
        }),
        error: (err) => {
          // handle error
          console.log(err)
        }
      })
  }

  ngOnDestroy(): void {
    this.bannerSubscription$.unsubscribe();
  }

}
