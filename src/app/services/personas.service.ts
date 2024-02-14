import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ResponseAPI } from '../interfaces/persona-interface'

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  private baseURL: string = 'https://randomuser.me/api/';

  constructor(private http: HttpClient) { }

  public randomUserList(): Observable<ResponseAPI> {
    return this.http.get<ResponseAPI>(`${ this.baseURL }?results=10`);
  }
}
