import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DeliveryRequest } from '../model/delivery-request';
import { DeliveryResponse } from '../model/delivery-response';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  private getAllUrl = 'http://localhost:8080/delivery/all';
  private getById = "http://localhost:8080/delivery/id/{id}";
  private getByName = "http://localhost:8080/delivery/name/{name}";
  private saveUrl = 'http://localhost:8080/delivery/create';
  private updateUrl = 'http://localhost:8080/delivery/update/{id}';
  private deleteUrl = 'http://localhost:8080/delivery/delete/{id}';

  constructor(private httpClient: HttpClient) { }

  getAllDeliveries(): Observable<DeliveryResponse[]> {
    return this.httpClient.get<DeliveryResponse[]>(this.getAllUrl);
  }

  getByIdDelivery(id: number): Observable<DeliveryResponse> {
    return this.httpClient.get<DeliveryResponse>(this.getById.replace('{id}', id.toString()));
  }

  getByNameDelivery(name: string): Observable<DeliveryResponse[]> {
    return this.httpClient.get<DeliveryResponse[]>(this.getByName.replace('{name}', name));
  }

  saveDelivery(delivery: DeliveryRequest): Observable<DeliveryResponse> {
    return this.httpClient.post<DeliveryResponse>(this.saveUrl, delivery);
  }

  updateDelivery(id: number, delivery: DeliveryRequest): Observable<DeliveryResponse> {
    return this.httpClient.put<DeliveryResponse>(this.updateUrl.replace('{id}', id.toString()), delivery);
  }

  deleteDelivery(id: number): Observable<DeliveryResponse> {
    return this.httpClient.delete<DeliveryResponse>(this.deleteUrl.replace('{id}', id.toString()));
  }
}
