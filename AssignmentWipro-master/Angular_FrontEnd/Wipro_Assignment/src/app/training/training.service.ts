import { Injectable } from '@angular/core';
import { ITraining } from './ITraining';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class TrainingService {
   baseUrl = 'http://localhost:55198/api/Training';
    constructor(private httpClient: HttpClient) {
    }

    getTrainingDetails(): Observable<ITraining[]> {

        return this.httpClient.get<ITraining[]>(this.baseUrl)
            .pipe(catchError(this.handleError));
    }

    private handleError(errorResponse: HttpErrorResponse) {
        if (errorResponse.error instanceof ErrorEvent) {
            console.error('Client Side Error :', errorResponse.error.message);
        } else {
            console.error('Server Side Error :', errorResponse);
        }
        return throwError('There is a problem with the service. We are notified & working on it. Please try again later.');
    }

    getTraining(Id: number): Observable<ITraining> {       
        return this.httpClient.get<ITraining>(`${this.baseUrl}/${Id}`)
            .pipe(catchError(this.handleError));
    }

    addTrainingDetails(training: ITraining): Observable<ITraining> {
       
        return this.httpClient.post<ITraining>(this.baseUrl,training, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
                

               
            })
        })
        .pipe(catchError(this.handleError));
    }

    updateTrainingDetails(training: ITraining): Observable<void> {
       return this.httpClient.put<void>(`${this.baseUrl}/${training.id}`, training, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        })
            .pipe(catchError(this.handleError));
    }

    deleteTrainingDetails(id: number): Observable<void> {
        return this.httpClient.delete<void>(`${this.baseUrl}/${id}`)
            .pipe(catchError(this.handleError));
    }
}