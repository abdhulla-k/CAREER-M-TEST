import { Component, OnInit } from '@angular/core';
import { CareerDataService } from '../career-data.service';

import { CareerModel } from '../shared/models/career-model'

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {
  careerData!: CareerModel

  constructor(
    private careerDataService: CareerDataService
  ) { }

  ngOnInit(): void {
    // get career data
    this.careerDataService.getCareers()
      .subscribe({
        next: (data) => {
          this.careerData = data;
          console.log(data)
        },
        error: (err) => {
          console.log(err);
        }
      })
  }
}
