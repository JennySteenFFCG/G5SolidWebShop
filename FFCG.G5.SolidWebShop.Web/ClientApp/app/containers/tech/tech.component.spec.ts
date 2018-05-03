/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { assert } from 'chai';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { TechComponent } from './tech.component';
import { ProductService } from '../../shared/product.service';
import { ShoppingCartService } from '../../shared/shoppingcart.service';

let fixture: ComponentFixture<TechComponent>;

describe('Tech Component', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({ 
            declarations: [TechComponent],
            providers: [{provide: ProductService, useValue: ProductService}, {provide: ShoppingCartService, useValue: ShoppingCartService}]
        });
        fixture = TestBed.createComponent(TechComponent);
        fixture.detectChanges();
    });

    it('should contain products', () => {
        expect(fixture.componentInstance.products).toBeTruthy();
    });

});
