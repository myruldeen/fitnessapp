import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DataService {

    
    constructor(private http:HttpClient) {
    }

    getData() {
        return this.http.get<any>('http://127.0.0.1:3000/data/list');
    }

    // getData() {
    //     return this.data;
    // }

    // getList() {
    //     return this.http.get('http://127.0.0.1:3000/data/list');
    // }

    // getCategory() {
    //     return this.categories;
    // }

    // private createAuthorizationHeader(headers: Headers) {
    // 	headers.append('Accept-Language', 'en_US');
    // 	headers.append('Content-Type', 'application/json');
    // }

    // create(data): Observable<Response> {
    // 	let headers = new Headers();
    // 	this.createAuthorizationHeader(headers);
    // 	return this.http.post(Globals.BASE_API_URL + 'data', data, {
    // 		headers: headers
    // 	});
    // }

    // get(id): Observable<Response> {
    // 	let headers = new Headers();
    // 	this.createAuthorizationHeader(headers);
    // 	return this.http.get(Globals.BASE_API_URL + 'data/' + id + '/' + this.dataLimit, {
    // 		headers: headers
    // 	});
    // }

}