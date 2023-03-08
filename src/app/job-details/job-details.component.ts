import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { CareerDataService } from '../career-data.service';
import { JobDetails } from '../shared/models/job-details';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit, OnDestroy {
  jobDetails!: JobDetails;
  detailsSubscription!: Subscription

  constructor(
    private activatedRoute: ActivatedRoute,
    private careerDataService: CareerDataService
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.params.subscribe({
      next: (data) => {
        this.careerDataService.getDetails(data['id'])
          .subscribe({
            next: (data: JobDetails) => {
              this.jobDetails = data;
            }
          })
      }
    })
  }

  ngOnDestroy(): void {
    this.detailsSubscription.unsubscribe();
  }
}
