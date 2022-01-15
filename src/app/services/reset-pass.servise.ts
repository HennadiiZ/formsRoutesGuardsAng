import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({providedIn: 'root'})

export class ResetPassService{



    private baseUrl = 'https://localhost:8000/api'

    constructor(private http: HttpClient){}

    sendPasswordResetLink(data: any){
            return this.http.post(`${this.baseUrl}/sendPasswordResetLink`, data) // I need back end part insteas of sendPasswordResetLink
    }
}