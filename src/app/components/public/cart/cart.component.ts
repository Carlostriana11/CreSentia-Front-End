import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'] // Corrige a styleUrls
})
export class CartComponent {
  @Input() logoSrc: string = '';
  @Input() fotoSrc: string = '';
  @Input() title: string = '';
  @Input() parrafoClave: string = '';
  @Input() parrafoRelleno: string = '';
  @Input() parrafoFinal: string = '';
  @Input() containerBackgroundColor: string = '#fff';
  @Input() url: string = "/";
  @Input() text: string = "";
}
