/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { assert } from 'chai';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { TechComponent } from './tech.component';
import { ProductService } from '../../shared/product.service';
import { ShoppingCartService } from '../../shared/shoppingcart.service';

describe('Tech component', () => {
    let techComponent: TechComponent;

    it('should be able to retrieve products', () => {
        let fakeProductService = new ProductService(null, null, null);
        techComponent = new TechComponent(fakeProductService, null);
        expect(techComponent.products.length).toBe(5);
    });

});
