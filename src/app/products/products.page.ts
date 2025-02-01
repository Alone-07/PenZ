import { Component, OnInit } from '@angular/core';
import { Share } from '@capacitor/share';
import {  NavController } from '@ionic/angular';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
  standalone: false,
})
export class ProductsPage implements OnInit {

  rating: number = 0;
  stars: number[] = [1, 2, 3, 4, 5];
  isFavorite: boolean = false;
  
  private productDetails = {
    title: 'Clinique Moisture Surge 100H Auto-Replenishing Hydrator',
    description: 'Refreshing oil-free face moisturizer with aloe bioferment and hyaluronic acid delivers instant hydration that soothes in 3 seconds. 100% instantly show a boost in hydration and glow.',
    imageUrl: '../../assets/images/prod.png'
  };

  constructor(private navigator: NavController) { }

  ngOnInit() { }

  setRating(value: number) {
    this.rating = value;
  }

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
  }

  async shareProduct() {
    try {
      await Share.share({
        title: this.productDetails.title,
        text: this.productDetails.description,
        url: window.location.href,
        dialogTitle: 'Share Product Details'
      });
    } catch (error) {
      console.error('Error sharing product:', error);
    }
  }

  public goBack(): void {
    this.navigator.back();
  }
}