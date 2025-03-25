import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-footer',
  imports: [],
  template: `
   <footer class="bg-gray-900 text-gray-300 py-12 px-4">
  <div class="container mx-auto max-w-6xl">
    <!-- Main Footer Content -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
      
      <!-- Newsletter Column -->
      <div>
        <h2 class="text-white text-2xl font-bold mb-4">Exclusive</h2>
        <h3 class="text-lg font-semibold mb-3">Subscribe</h3>
        <p class="mb-4">Get 10% off your first order</p>
        <div class="flex">
          <input 
            type="email" 
            placeholder="Enter your email" 
            class="bg-gray-800 text-white px-4 py-2 rounded-l focus:outline-none flex-grow"
          >
          <button class="bg-red-600 text-white px-4 py-2 rounded-r hover:bg-red-700">
            Subscribe
          </button>
        </div>
      </div>

      <!-- Support Column -->
      <div>
        <h3 class="text-white text-lg font-semibold mb-4">Support</h3>
        <address class="not-italic space-y-2">
          <p>QR LABS, New Jersey.</p>
          <p>exclusivemail.com</p>
          <p>+88015-88888-9999</p>
        </address>
      </div>

      <!-- Account Column -->
      <div>
        <h3 class="text-white text-lg font-semibold mb-4">Account</h3>
        <ul class="space-y-2">
          <li><a routerLink="/account" class="hover:text-white">My Account</a></li>
          <li><a routerLink="/login" class="hover:text-white">Login / Register</a></li>
          <li><a routerLink="/cart" class="hover:text-white">Cart</a></li>
          <li><a routerLink="/wishlist" class="hover:text-white">Wishlist</a></li>
          <li><a routerLink="/shop" class="hover:text-white">Shop</a></li>
        </ul>
      </div>

      <!-- Quick Links Column -->
      <div>
        <h3 class="text-white text-lg font-semibold mb-4">Quick Link</h3>
        <ul class="space-y-2">
          <li><a href="#" class="hover:text-white">Privacy Policy</a></li>
          <li><a href="#" class="hover:text-white">Terms Of Use</a></li>
          <li><a href="#" class="hover:text-white">FAQ</a></li>
          <li><a href="#" class="hover:text-white">Contact/ Enquiry</a></li>
        </ul>
      </div>
    </div>

    <!-- Download App Section -->
    <div class="border-t border-gray-700 pt-8">
      <h3 class="text-white text-lg font-semibold mb-4">Download App</h3>
      <p class="mb-4">Store $3 with App New User Only</p>
      <div class="flex flex-wrap gap-3">
        <a href="#" class="bg-black text-white px-4 py-2 rounded flex items-center gap-2">
          <span class="i-mdi-google-play text-xl"></span>
          Google Play
        </a>
        <a href="#" class="bg-black text-white px-4 py-2 rounded flex items-center gap-2">
          <span class="i-mdi-apple text-xl"></span>
          App Store
        </a>
      </div>
    </div>
  </div>
</footer>
  `,
  styles: ``
})
export class FooterComponent {
  cartService = inject(CartService);
}
