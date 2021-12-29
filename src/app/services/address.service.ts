import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Address } from '../models/address';

@Injectable()
export class AddressService {

    constructor(private _http: HttpClient) { }

    getAddresss(): Observable<Address[]> {
        return this._http.get<Address[]>(`http://localhost:3000/address/all`);
    }

    getAddressById(id: number): Observable<Address> {
        return this._http.get<Address>(`http://localhost:3000/address/details/${id}`);
    }

    addAddress(address: Address): Observable<Address> {
        return this._http.post<Address>(`http://localhost:3000/address/add`, address);
    }

    updateAddress(id: number, address: Address): Observable<Address> {
        return this._http.put<Address>(`http://localhost:3000/address/update/${id}`, address)
    }

    deleteAddress(id: number): Observable<Address> {
        return this._http.delete<Address>(`http://localhost:3000/address/delete/${id}`);
    }
}
