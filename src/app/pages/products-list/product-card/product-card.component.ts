import { Component, inject, input } from '@angular/core';
import { Product } from '../../../models/products.model';
import { PrimaryButtonComponent } from "../../../components/primary-button/primary-button.component";
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-product-card',
  imports: [PrimaryButtonComponent],
  template: `
 <div class="bg-white shadow-md border rounded-xl p-3 sm:p-4 md:p-6 flex flex-col h-full hover:shadow-lg transition-shadow">
      <!-- Image Container (Responsive) -->
      <div class="mx-auto w-full">
        <img 
          [src]="product().image" 
          class="w-full h-[120px] sm:h-[150px] md:h-[180px] object-contain"
          loading="lazy"
          [alt]="product().title"
        >
      </div>

      <!-- Content Section -->
      <div class="flex flex-col mt-3 flex-grow">
        <!-- Title (Truncate long text) -->
        <span class="text-sm sm:text-base font-bold line-clamp-2 min-h-[40px]">
          {{ product().title }}
        </span>
        
        <!-- Price -->
        <span class="text-md font-semibold mt-1 text-gray-800">
          {{ '$' + product().price }}
        </span>

        <!-- Stock Status -->
        <span 
          class="absolute top-2 right-2 text-xs sm:text-sm font-bold px-2 py-1 rounded-full"
          [class]="product().stock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'"
        >
          {{ product().stock ? product().stock + ' left' : 'Out of Stock' }}
        </span>

        <!-- Button -->
        <app-primary-button 
          label="Add to Cart" 
          class="mt-3 sm:mt-4 w-full"
          [disabled]="!product().stock"
          (btnClicked)="cartService.addtoCart(product())" 
        />
      </div>
    </div>
   
  `,
  styles: ``
})
export class ProductCardComponent {
  cartService = inject(CartService);

  product = input.required<Product>();
}
