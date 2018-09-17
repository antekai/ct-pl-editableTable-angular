import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlistaFirebaseService {
  constructor(private http: Http) {}

  postPlistaData(plData: any[]) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(
      'https://ct-plista.firebaseio.com/data.json',
      plData,
      { headers: headers }
    );
  }
  putPlistaData(plData: any[]) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.put('https://ct-plista.firebaseio.com/data.json', plData, {
      headers: headers
    });
  }
  // getPlistaRawData() {
  //   return (
  //     this.http.get('https://ct-plista.firebaseio.com/data').pipe(
  //       map((response: Response) => {
  //         const data = response.json();
  //         // post-process data
  //         // ......
  //         return data;
  //       })
  //     ),
  //     catchError((error: Response) => {
  //       return Observable.throw('Something went wrong');
  //     })
  //   );
  // }
  getPlistaData() {
    return this.http.get('https://ct-plista.firebaseio.com/data.json').pipe(
      map((response: Response) => {
        return response.json();
      })
    );
  }
  getPlistaDataRecord(key: string) {
    return this.http.get('https://ct-plista.firebaseio.com/data.json').pipe(
      map((response: Response) => {
        const data = response.json();
        const record = data.find(x => x.key === key);
        return record;
      })
    );
  }
  putPlistaDataRecord(key: string) {}
}
