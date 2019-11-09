import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../_models';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        let headers = new HttpHeaders()
        headers = headers.set('auth', JSON.parse(localStorage.getItem('currentUser')).token);

        return this.http.get<any>(`http://localhost:3000/user/`, { headers })

    }
}