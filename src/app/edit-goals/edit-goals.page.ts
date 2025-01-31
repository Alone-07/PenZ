import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-edit-goals',
  templateUrl: './edit-goals.page.html',
  styleUrls: ['./edit-goals.page.scss'],
  standalone: false,
})
export class EditGoalsPage implements OnInit {
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

  selectedCategory: string = this.categories[0];
  selectedSkinType: string = this.skinTypes[0];
  selectedSpecificSkin: string = this.specificSkin[0];
  selectedSkinCondition: string = this.skinConditions[0];
  selectedCurrentlyUse: string = this.currentlyUse[0];
  selectedSkinCareProduct: string = this.skinCareProducts[0];
  selectedNaturalOrOrganic: string = this.naturalOrOrganic[0];

  toggleSelection(selectedItem: string, item: string): string {
    return selectedItem === item ? '' : item;
  }

  isSelected(selectedItem: string, item: string): boolean {
    return selectedItem === item;
  }

  questions = [];
  constructor(private apiService: ApiService, private navigator: NavController) { 
    this.getQuestions();
  }

  ngOnInit() {
  }

  onCancel() {
    // Handle cancel action
    this.goBack();
    console.log('Cancel button clicked');
  }

  onContinue() {
    // Handle continue action
    console.log('Continue button clicked');
  }

  async getQuestions() {
    const res: any = await this.apiService.getCaterogyQuestions()
      if(!res || res.statusCode != 200) {
        console.warn('Theres not data & statusCode ', res?.statusCode);
        return;
      }

      const {statusCode, body: {Result}} = res;
      const filteredResult = new Map();

      if(statusCode == '200' && Result && Result.length) {
        Result.forEach((e:any) => {
          const {SUB_CATEGORY_ID, SUB_CATEGORY_NAME, QUESTION, OPTIONS, IS_ACTIVE} = e;
          if(filteredResult.has(SUB_CATEGORY_ID)) {

            let data = filteredResult.get(SUB_CATEGORY_ID);
            const questionData = {
              question: QUESTION,
              options: OPTIONS,
            };
            data = {
              ...data,
              questions: [...data.questions, questionData]
            };
            filteredResult.set(SUB_CATEGORY_ID, data);
          }else {
            const questionData = {
              question: QUESTION,
              options: OPTIONS,
            };
            const data = {
              subCategoryId: SUB_CATEGORY_ID,
              subCategoryName: SUB_CATEGORY_NAME,
              questions: [questionData],
              isActive: IS_ACTIVE,
            };
            filteredResult.set(SUB_CATEGORY_ID, data);
          }
        });
        console.warn('result => ', filteredResult);
      }
  }

  public goBack(): void {
    this.navigator.back();
  }
}