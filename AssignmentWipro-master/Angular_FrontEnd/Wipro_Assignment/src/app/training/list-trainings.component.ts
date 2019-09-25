import { Component, OnInit } from '@angular/core';
import {TrainingService} from './training.service';
import { ITraining } from './ITraining';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-trainings',
  templateUrl: './list-trainings.component.html',
  styleUrls: ['./list-trainings.component.css']
})
export class ListTrainingsComponent implements OnInit {
  training: ITraining[];
  constructor(private _trainingservice:TrainingService,private _router:Router){}

  ngOnInit() {
    this._trainingservice.getTrainingDetails().subscribe(
      (listtrainings)=>this.training=listtrainings,
      (err)=>console.log(err)

    );
  }
  editButtonClick(id:number){
   this._router.navigate(['/edit',id]);

  }

}
