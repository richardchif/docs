import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse,HttpParams } from '@angular/common/http';
import { declaredData } from '../data/data';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  constructor(private http: HttpClient) { }

     // Define API
   private apiURL:string= "http://localhost:3000";
   public enum:string;
   userData:declaredData[];
      declared =new declaredData();

    private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
 }

/** POST: add a new owner to the database */
sign(userData: declaredData): Observable<declaredData> {
  return this.http.post<declaredData>(this.apiURL+"/sign",userData,{headers:new HttpHeaders({
    'Content-Type':'application/json'
  })
})
    .pipe(
      catchError(this.handleError));
}
/** POST: add a new owner to the database */
add(userData: declaredData): Observable<declaredData> {
  return this.http.post<declaredData>(this.apiURL+"/adds",userData,{headers:new HttpHeaders({
    'Content-Type':'application/json'
  })
})
    .pipe(
      catchError(this.handleError));
}
/** POST: add a new owner to the database */
additems(userData: declaredData): Observable<declaredData> {
  return this.http.post<declaredData>(this.apiURL+"/additems",userData,{headers:new HttpHeaders({
    'Content-Type':'application/json'
  })
})
    .pipe(
      catchError(this.handleError));
}
  /*Sign in of users*/
  userlogin (userData: declaredData): Observable<declaredData> {
  return this.http.post<declaredData>(this.apiURL+"/log",userData,{headers:new HttpHeaders({
    'Content-Type':'application/json'
  })
})
    .pipe(
      catchError(this.handleError));
}
/** POST: add a new owner to the database */
ownerDetails(userData: declaredData): Observable<declaredData> {
  return this.http.post<declaredData>(this.apiURL+"/ownerDetails",userData,{headers:new HttpHeaders({
    'Content-Type':'application/json'
  })
})
    .pipe(
      catchError(this.handleError));
}

/** POST: add a new owner to the database */
vehicle(userData: declaredData): Observable<declaredData> {
  return this.http.post<declaredData>(this.apiURL+"/vehicle",userData,{headers:new HttpHeaders({
    'Content-Type':'application/json'
  })
})
    .pipe(
      catchError(this.handleError));
}

///////////////////get Users//////////////////////////////////////////////
 user():Observable<declaredData[]>{
    return this.http.get<declaredData[]>(this.apiURL+"/login");
  } 


/** POST: add a new owner to the database */
addAdmin(userData: declaredData): Observable<declaredData> {
  return this.http.post<declaredData>(this.apiURL+"/addAdmin",userData,{headers:new HttpHeaders({
    'Content-Type':'application/json'
  })
})
    .pipe(
      catchError(this.handleError));
}
/** POST: add a new owner to the database */
changePassword(userData: declaredData): Observable<declaredData> {
  return this.http.post<declaredData>(this.apiURL+"/changePassword",userData,{headers:new HttpHeaders({
    'Content-Type':'application/json'
  })
})
    .pipe(
      catchError(this.handleError));
}
/** POST: add a new owner to the database */
tempPassword(userData: declaredData): Observable<declaredData> {
  return this.http.post<declaredData>(this.apiURL+"/tempPassword",userData,{headers:new HttpHeaders({
    'Content-Type':'application/json'
  })
})
    .pipe(
      catchError(this.handleError));
}

getData(Emails:string):Observable<declaredData[]>{
   this.declared.Email=Emails;

  let params=new HttpParams()
  .set('Email',Emails);
  console.log(params.toString());
    return this.http.get<declaredData[]>(this.apiURL+"/allData"+'/'+Emails);
  } 


  getDataToIssue(Emails:string,Dpt:string):Observable<declaredData[]>{
   this.declared.Email=Emails;

  let params=new HttpParams()
  .set('Email',Emails);
  console.log(params.toString());
    return this.http.get<declaredData[]>(this.apiURL+"/allDataToIssue"+'/'+Emails+'/'+Dpt);
  } 


  getPendingData(Emails:string):Observable<declaredData[]>{
   this.declared.Email=Emails;

  let params=new HttpParams()
  .set('Email',Emails);
  console.log(params.toString());
    return this.http.get<declaredData[]>(this.apiURL+"/allPendingData"+'/'+Emails);
  } 
    getDpt(Emails:string):Observable<string>{
   this.declared.Email=Emails;

  let params=new HttpParams()
  .set('Email',Emails);
  console.log(params.toString());
    return this.http.get<string>(this.apiURL+"/dpt"+'/'+Emails);
  } 
      getOrder():Observable<string>{
    return this.http.get<string>(this.apiURL+"/order");
  } 
      getAp(ID_Key:string):Observable<string>{
  
    return this.http.get<string>(this.apiURL+"/approveR"+'/'+ID_Key);
  } 
        getIs(ID_Key:string):Observable<string>{
  
    return this.http.get<string>(this.apiURL+"/issueR"+'/'+ID_Key);
  } 
          getReject(ID_Key:string):Observable<string>{
  
    return this.http.get<string>(this.apiURL+"/issueR"+'/'+ID_Key);
  } 
  /** POST: add a new owner to the database */
setNewPass(userData: declaredData): Observable<declaredData> {
  return this.http.post<declaredData>(this.apiURL+"/setNewPass",userData,{headers:new HttpHeaders({
    'Content-Type':'application/json'
  })
})
    .pipe(
      catchError(this.handleError));
}
  /** POST: add a new owner to the database */
approve(userData:declaredData): Observable<declaredData> {
  return this.http.post<declaredData>(this.apiURL+"/approve",userData,{headers:new HttpHeaders({
    'Content-Type':'application/json'
  })
})
    .pipe(
      catchError(this.handleError));
}
} 




