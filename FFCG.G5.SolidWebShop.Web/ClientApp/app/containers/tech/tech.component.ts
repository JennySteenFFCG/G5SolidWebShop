import { Component } from '@angular/core';
import { IProduct } from '../../models/Product';
import { ProductService} from '../../shared/product.service'
import { ShoppingCartService } from '../../shared/shoppingcart.service'

@Component({
    selector: 'tech',
    templateUrl: './tech.component.html',
    styleUrls: ['./tech.component.css']
})

export class TechComponent {
    
    public products : [IProduct]

    constructor(productService: ProductService, private shoppingCartService: ShoppingCartService) {

        productService.getProducts().subscribe(products => {
            this.products = products;
        });
    };

    private addToCart(product: IProduct){
        this.shoppingCartService.addToCart(product);
    }
}
