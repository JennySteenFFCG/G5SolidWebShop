import { Injectable, Inject } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';
import { ORIGIN_URL } from './constants/baseurl.constants';
import { IUser } from '../models/User';
import { TransferHttp } from '../../modules/transfer-http/transfer-http';
import { Observable } from 'rxjs/Observable';
import { IProduct } from '../models/Product'

@Injectable()
export class ProductService {
    constructor(
        private transferHttp: TransferHttp, // Use only for GETS that you want re-used between Server render -> Client render
        private http: Http, // Use for everything else
        @Inject(ORIGIN_URL) private baseUrl: string) {

    }

    public getProducts(): Observable<[IProduct]> {
        return Observable.of(this.getMockedProducts());
    }

    private getMockedProducts(): [IProduct] {
        return [
            {
                name: 'Bat',
                imageUrl: 'https://vignette.wikia.nocookie.net/batman/images/c/c8/Batman_%2766_-_Adam_West_as_Batman_2.jpg/revision/latest?cb=20140731220401',
                price: 100,
                description: 'this is batman'
            }
        ]
    }
}