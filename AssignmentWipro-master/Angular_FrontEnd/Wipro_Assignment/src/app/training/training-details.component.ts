import { Component, OnInit } from '@angular/core';
import {TrainingService} from './training.service';
import { FormGroup, FormBuilder, Validators, FormArray, AbstractControl, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { from } from 'rxjs';
import { ITraining } from './ITraining';

@Component({
  selector: 'app-training-details',
  templateUrl: './training-details.component.html',
  styleUrls: ['./training-details.component.css']
})
export class TrainingDetailsComponent implements OnInit {
  trainingForm: FormGroup;
  training:ITraining;
  userMsg: String;
  validationMessages = {
    'Name': {
      'required': ' Name is Required.',
      'minlength': 'Name must be greater than 2 char',
      'maxlength': 'Name must be smaller than 10 char',
    },
    'StartDate': {
      'required': 'StartDate is required',     
    },
    'EndDate': {
      'required': 'EndDate is required',
     
    },
    'Date': {
      'verifyEndDate': 'EndDate should be less than start date',
     
    }  
   
  };
  formErrors = {   

  };
  
  constructor(private fb: FormBuilder, private route: ActivatedRoute
    ,private trainingService:TrainingService,
    private router:Router) { }

  ngOnInit() {
    this.trainingForm = this.fb.group({
      Name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      Date:this.fb.group({
        StartDate: ['',[ Validators.required]],
        EndDate:['',Validators.required],
      },{validator:matchEmails})
        
    });
    this.trainingForm.valueChanges.subscribe((data) => {

      this.logValidationErrors(this.trainingForm);

    });
    this.route.paramMap.subscribe(params => {
      const Id = +params.get('id');
       if (Id) {
        this.getTrainingDetails(Id);
      } else {
       
        this.training = {
          id: null,
          Name: '',
         /*  StartDate:new Date(),
          EndDate: new Date() */
          StartDate:'',
          EndDate: ''
        };
      }
    });


  }
  getTrainingDetails(Id: number) {
    this.trainingService.getTraining(Id)
      .subscribe(
        (training: ITraining) => {
          // Store the employee object returned by the
          // REST API in the employee property
          this.training = training;
          this.editTrainingDetail(training);
        },
        (err: any) => console.log(err)
      );
  }
  editTrainingDetail(training:ITraining){
    this.trainingForm.patchValue({
      Name:training.Name,               
      Date:{
        StartDate:training.StartDate,
        EndDate:training.EndDate
      },

    });
    
  }
  getUserMsg(res: any): void {
    const date1 = new Date(res.StartDate);
const date2 = new Date(res.EndDate);
const diffTime = Math.abs(date2.getTime() - date1.getTime());
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    // const days = ( ed - sd);
    this.userMsg=`Hi User, Your traing has been saved Successfully,..Number of days!! ${diffDays}`;
    //  'Jai Shri Ram!';
  }
  onSubmit(): void {
    this.mapFormValuesToTrainingModel();
  
    if (this.training.id) {
      this.trainingService.updateTrainingDetails(this.training).subscribe(
        (res) => {
          console.log('**JSR,..',res);
          this.getUserMsg(res);
          //this.router.navigate(['ListTrainings']);
        },
        (err: any) => {
          this.userMsg = `Error! Something Wen Wrong! `;
        }
      );
    } else {
     
      this.trainingService.addTrainingDetails(this.training).subscribe(
        (res) => {
           console.log('**JSR,..',res);
          // this.router.navigate(['ListTrainings']);
          this.getUserMsg(res);
        },
        (err: any) => {this.userMsg = `Error! Something Wen Wrong! `;}
      );
    }
  }
  
  mapFormValuesToTrainingModel() {
    this.training.Name = this.trainingForm.value.Name;
    this.training.StartDate = this.trainingForm.value.Date.StartDate;
    this.training.EndDate = this.trainingForm.value.Date.EndDate;
  }
  
  logValidationErrors(group: FormGroup = this.trainingForm): void {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);
      this.formErrors[key] = '';
      if (abstractControl && !abstractControl.valid && (abstractControl.touched || abstractControl.dirty
        ||abstractControl.value!=='')) {
        const messages = this.validationMessages[key];
        for (const errorkey in abstractControl.errors) {
          if (errorkey) {
            this.formErrors[key] += messages[errorkey] + ' ';
          }
  
        }
      }
      if (abstractControl instanceof FormGroup) {
        this.logValidationErrors(abstractControl);
  
      } 
     
    });
  
  }
  

}
function matchEmails(group: AbstractControl): { [key: string]: any } | null {
  const startDate = group.get('StartDate');
  const endDate = group.get('EndDate');

  if (endDate.value > startDate.value || (endDate.pristine
    ||endDate.value==='')) {
    return null;
  } else {
    return { 'verifyEndDate': true };
  }
}
