import { Component, OnInit } from '@angular/core';

interface Product {
	id: number;
	brand: string;
	name: string;
	rating: number;
	image: string;
	isLiked?: boolean;
  }
@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.page.html',
  styleUrls: ['./recommendation.page.scss'],
  standalone: false,
})
export class RecommendationPage implements OnInit {

	products: Product[] = [
		{
		  id: 1,
		  brand: 'TRESemmé',
		  name: 'TRESemme Extra Hold Frizz Control Hairspray, 11 oz',
		  rating: 4.5,
		  image: '../../assets/images/prod-1.png'
		},
		{
		  id: 2,
		  brand: 'Schwarzkopf',
		  name: 'Schwarzkopf Keratin Color Permanent Hair Color, 1.1 Midnight Black',
		  rating: 4.5,
		  image: '../../assets/images/prod-2.png'
		},
		{
		  id: 3,
		  brand: 'OLAPLEX',
		  name: 'No. 4 Bond Maintenance Strengthening and Reparative Hair Shampoo',
		  rating: 4.5,
		  image: '../../assets/images/prod-3.png'
		}
	  ];

	constructor() { }

	ngOnInit() {
		this.products = this.products.map(product => ({
			...product,
			isLiked: localStorage.getItem(`product-${product.id}-liked`) === 'true'
		  }));
	}

	toggleLike(product: Product) {
		product.isLiked = !product.isLiked;
		this.saveLikeState(product);
	}

	private saveLikeState(product: Product) {
     	localStorage.setItem(`product-${product.id}-liked`, product.isLiked?.toString() || 'false');
	}

}
