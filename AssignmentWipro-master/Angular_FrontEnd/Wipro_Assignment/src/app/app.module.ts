import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrainingDetailsComponent } from './training/training-details.component'
import { HttpClientModule } from '@angular/common/http';
import { ListTrainingsComponent } from './training/list-trainings.component';
import {TrainingService} from './training/training.service';


@NgModule({
  declarations: [
    AppComponent,
    TrainingDetailsComponent,
    ListTrainingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [TrainingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
