
import { Injectable } from '@angular/core';
import { Observable, throwError , Subject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService_usedcars {
  
  baseUri:string = 'http://localhost:4000/carsforsale';
 // headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  private _refreshNeeded$ = new Subject<void>();

  get refreshNeeded$(){
        return this._refreshNeeded$;
  }
  addbids(data): Observable<any> {

    let url = `${this.baseUri}/addbid`;
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }
  // Create
  registerCar(data): Observable<any> {

    let url = `${this.baseUri}/carRegistration`;
    return this.http.post(url, data)
      .pipe(
       // catchError(this.errorMgmt)
        tap(()=>{
          this._refreshNeeded$.next()
        }

        )


      )
  }

  getCars() : Observable<any> {
    let id=localStorage.getItem('_id')
    return this.http.get(`${this.baseUri}/getAllCars/${id}`);
  }

  acceptBid(data) : Observable <any>  {
    let url = `${this.baseUri}/acceptbid`;
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorMgmt)
      )

  }

  getAllCars() : Observable<any> {
   // let id=localStorage.getItem()
    return this.http.get(`${this.baseUri}/getAllCars`);
  }

  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }


    // Delete car
    deleteCar(id): Observable<any> {
      let url = `${this.baseUri}/delete/${id}`;
      return this.http.delete(url).pipe(
       // catchError(this.errorMgmt)
        tap(()=>{
          this._refreshNeeded$.next()
        }

        )
      )
    }


    
}

