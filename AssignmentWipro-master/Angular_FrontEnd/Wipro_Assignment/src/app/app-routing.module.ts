import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrainingDetailsComponent } from './training/training-details.component'
import { ListTrainingsComponent } from './training/list-trainings.component'

const appRoutes: Routes = [
{path: 'training',component:TrainingDetailsComponent},
{path: 'ListTrainings',component:ListTrainingsComponent},
{path:'edit/:id',component:TrainingDetailsComponent},
{path:'',redirectTo:'/training',pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
