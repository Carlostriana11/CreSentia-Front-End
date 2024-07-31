import { Component } from '@angular/core';
import { CartComponent } from "../../../components/public/cart/cart.component";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CartComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export default class ProductsComponent {

}
