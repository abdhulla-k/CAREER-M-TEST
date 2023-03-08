import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  applied = false;
  detailsSubscription$!: Subscription;
  applicationSubscription$!: Subscription;
  applicationForm!: FormGroup;
  applicationFormData = new FormData();

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

    //  create form 
    this.applicationForm = new FormGroup({
      'first_name': new FormControl('', Validators.required),
      'last_name': new FormControl(null, Validators.required),
      'phone': new FormControl('', Validators.required),
      'email': new FormControl('', Validators.required),
      'linkedin': new FormControl('', Validators.required),
      'location': new FormControl('', Validators.required),
      'website': new FormControl('', Validators.required),
      'resume': new FormControl('', Validators.required),
      'cover_letter': new FormControl('', Validators.required)
    })
  }

  applie() {
    this.applied = true;
  }

  saveFile(key: string, event: any) {
    this.applicationFormData.append(key, event.target.files[0]);
  }

  onSubmit() {
    this.applicationFormData.append('first_name', this.applicationForm.value.first_name)
    this.applicationFormData.append('last_name', this.applicationForm.value.last_name)
    this.applicationFormData.append('phone', this.applicationForm.value.phone)
    this.applicationFormData.append('email', this.applicationForm.value.email)
    this.applicationFormData.append('linkedin', this.applicationForm.value.linkedin)
    this.applicationFormData.append('location', this.applicationForm.value.location)
    this.applicationFormData.append('website', this.applicationForm.value.website)

    this.applicationSubscription$ = this.careerDataService.apply(this.applicationFormData)
      .subscribe({
        next: (data) => {
          // display success message
          console.log(data)
        },
        error: (err) => {
          // handle error and show the message to user
          console.log(err)
        }
      })
  }

  ngOnDestroy(): void {
    this.detailsSubscription$.unsubscribe();
    this.applicationSubscription$.unsubscribe();
  }
}
