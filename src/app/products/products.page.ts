import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() { }

  setRating(value: number) {
    this.rating = value;
  }

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
  }
}
