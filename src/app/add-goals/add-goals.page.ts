import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-goals',
  templateUrl: './add-goals.page.html',
  styleUrls: ['./add-goals.page.scss'],
  standalone: false,
})
export class AddGoalsPage implements OnInit {

  categories = [
    'Skin Care',
    'Hair Care',
    'Body Care',
    'Oral Care',
    'Feminine Hygiene',
    'Baby Care',
    'Supplements and Vitamins'
  ];

  skinTypes = [
    'Oily Skin',
    'Dry Skin',
    'Sensitive Skin'
  ];

  specificSkin = [
    'Acne or breakouts',
    'Blackheads',
    'whiteheads',
    'Dark Spots'
  ];

  skinConditions = [
    'Eczema',
    'Psoriasis',
    'Rosacea',
    'None'
  ];

  currentlyUse = [
    'Cleanser',
    'Toner',
    'Moisturizer',
    'Sunscreen'
  ];

  skinCareProducts = [
    'Daily',
    'Occasionally',
    'Rarely'
  ];

  naturalOrOrganic = [
    'Yes',
    'No',
    'No preference'
  ];

  selectedCategories: string[] = [this.categories[0]];
  selectedSkinTypes: string[] = [this.skinTypes[0]];
  selectedSpecificSkin: string[] = [this.specificSkin[0]];
  selectedSkinConditions: string[] = [this.skinConditions[0]];
  selectedCurrentlyUse: string[] = [this.currentlyUse[0]];
  selectedSkinCareProducts: string[] = [this.skinCareProducts[0]];
  selectedNaturalOrOrganic: string[] = [this.naturalOrOrganic[0]];

  toggleSelection(list: string[], item: string) {
    const index = list.indexOf(item);
    if (index > -1) {
      list.splice(index, 1);
    } else {
      list.push(item);
    }
  }

  isSelected(list: string[], item: string): boolean {
    return list.includes(item);
  }

  constructor() { }

  ngOnInit() {
  }

  onCancel() {
    // Handle cancel action
    console.log('Cancel button clicked');
  }

  onContinue() {
    // Handle continue action
    console.log('Continue button clicked');
  }

}
