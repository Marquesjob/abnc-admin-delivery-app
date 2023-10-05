import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StructuresService {

  constructor(
    private http: HttpClient
  ) { }

  getExamples() {
    return this.http.get<any>('http://localhost:3000/pedidos');
  }

}


