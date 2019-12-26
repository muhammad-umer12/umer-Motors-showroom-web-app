import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginapiService {

  constructor(private http: HttpClient) { }

  

  baseUri:string = 'http://localhost:4000/api';

    // Authenticate login
    authentication(data): Observable<any> {
    
      let url = `${this.baseUri}/admin/login`;
      return this.http.post(url, data)
        .pipe(
          catchError(this.errorMgmt)
        )
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
}
