import { Component } from '@angular/core'
import { IProduct } from '../models/Product'
import { Injectable } from '@angular/core'
import { Subject } from 'rxjs/Subject'

@Injectable()
export class ShoppingCartService{

    private products: IProduct[]
    private cartChangedSource = new Subject<number>()
    cartChanged$ = this.cartChangedSource.asObservable();

    constructor(){
        this.products = [];
    }

    public getProducts(): IProduct[] {
        return this.products;
    }

    public addToCart(product: IProduct){
        this.products.push(product);
        this.notifyThatCartChanged();
    }

    public removeFromCart(product: IProduct){
        this.products.splice(this.products.indexOf(product), 1);
        this.notifyThatCartChanged();
    }

    private notifyThatCartChanged(): void {
        this.cartChangedSource.next(this.products.length);
    }
}