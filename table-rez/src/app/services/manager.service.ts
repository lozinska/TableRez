import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor(private http:HttpClient) { }

  private async request(method: string, url: string, data?: any) {

    const result = this.http.request(method, url, {
      body: data,
      responseType: 'json',
      observe: 'body'
    });
    return new Promise((resolve, reject) => {
      result.subscribe(resolve, reject);
    });
  }
  getAllManagers() {
    return this.request('GET', `${environment.serverUrl}/manager`);
  }
  getManager(id:number){
    return this.request('GET',`${environment.serverUrl}/manager/${id}`);
  }
  addManager(manager){
    return this.request('POST',`${environment.serverUrl}/manager`,manager);
  }
  updateManager(manager) {
    return this.request('PUT', `${environment.serverUrl}/manager/${manager.managerID}`, manager);
  }
  loginManager(email,password){
    return this.request('POST', `${environment.serverUrl}/manager`,{email,password});
  }
}


