import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { LoadingController, NavController, ToastController } from '@ionic/angular';

import { GoalsService } from '../services/goals.serivice';
@Component({
  selector: 'app-add-goals',
  templateUrl: './add-goals.page.html',
  styleUrls: ['./add-goals.page.scss'],
  standalone: false,
})
export class AddGoalsPage implements OnInit {

  mapCategories:Map<any,any> = new Map();
  categories:any = [];
  selectedCategory: any = {};
  showSecondPage: boolean = false;
  loader: any;
  progressValue: number = 50;
  isGoalDetailsFilled: boolean = false;

  selectedDate: string = '';

  constructor(private apiService: ApiService, private navigator: NavController, private loaderCtrl: LoadingController, private toastCtrl: ToastController, private goalsService: GoalsService) { 
    this.getQuestions();
  }

  ngOnInit() {
  }

  onCancel() {
    if (this.showSecondPage) {
      this.showSecondPage = false;
      this.progressValue = 50;
      this.isGoalDetailsFilled = false;
    } else {
      this.goBack();
    }
  }

  onContinue() {
    if (!this.showSecondPage) {
      const isValidate = this.validate();
      if(isValidate) {
        this.isGoalDetailsFilled = isValidate;
        this.progressValue = 100;
        this.showSecondPage = true;
      }
    } 
  }

  saveGoal() {
    const goal = {
      categoryId: this.selectedCategory.subCategoryId,
      categoryName: this.selectedCategory.subCategoryName,
      questions: this.selectedCategory.questions,
      // Add any other relevant goal data
    };
    
    this.goalsService.addGoal(goal);
    this.navigator.navigateRoot('/tabs/goals');
  }
  
  async getQuestions() {
    this.showLoading();
    const res: any = await this.apiService.getCaterogyQuestions()
    this.hideLoading();
      if(!res || res.statusCode != 200) {
        console.warn('Theres not data & statusCode ', res?.statusCode);
        return;
      }

      const {statusCode, body: {Result}} = res;
      // const filteredResult = new Map();

      if(statusCode == '200' && Result && Result.length) {
        Result.forEach((e:any) => {
          const {SUB_CATEGORY_ID, SUB_CATEGORY_NAME, QUESTION, OPTIONS, SELECTED_OPTION, IS_ACTIVE} = e;
          const questionData = {
            question: QUESTION,
            options: OPTIONS,
            selectedOption: SELECTED_OPTION,
          };

          if(this.mapCategories.has(SUB_CATEGORY_ID)) {
            let data = this.mapCategories.get(SUB_CATEGORY_ID);
            data = {
              ...data,
              questions: [...data.questions, questionData]
            };
            this.mapCategories.set(SUB_CATEGORY_ID, data);
          }else {
            const data = {
              subCategoryId: SUB_CATEGORY_ID,
              subCategoryName: SUB_CATEGORY_NAME,
              questions: [questionData],
              // isActive: IS_ACTIVE,
              isActive: 'N',
            };
            this.mapCategories.set(SUB_CATEGORY_ID, data);
          }
        });
        this.categories = [...this.mapCategories.values()];
      }
  }

  public toggleCategorySelection(id: number):void {
    if(!this.mapCategories.has(id)){
      console.warn(`Category not found, id: ${id}`);
      return;
    }
    this.mapCategories.forEach((e:any,i: any) => {
      if(i == id) {
        e.isActive = 'Y';
        this.selectedCategory = {...e};
      }else {
        e.isActive = 'N';
      }
    });
  }
  public toggleQuestionSelection(questionId: number, optionId: number): void {
    const question = this.selectedCategory.questions[questionId]
    const option = question.options[optionId];

    question.selectedOption = option.id;
  }
  
  public validate():boolean {
    let msg = '';
    if(!Object.keys(this.selectedCategory).length) {
      msg = 'Please, select a category...';
    }else {
      const atleadAquestionAnswered = this.selectedCategory.questions.some((e:any) => e.selectedOption != null);
      msg = atleadAquestionAnswered ? '' : 'Please, answer for few questions...';
    }


    if(msg !== '') {
      this.presentToast(msg);
      return false;
    }

    return true;
  }


  public goBack(): void {
    this.navigator.back();
  }

  public async showLoading () {
    this.loader = await this.loaderCtrl.create({
      message: 'Loading...',
    });

    this.loader.present();
  }
  
  public hideLoading() {
    this.loader?.dismiss();
  }

  public async presentToast(message: string) {
    const toast = this.toastCtrl.create({
      message,
      duration: 2000,
      position: 'middle',
      swipeGesture: 'vertical',
      cssClass: 'custom-toast',
      color: 'light',
    });

    (await toast).present();
  }

  
  handleDateChange(event: any) {
    this.selectedDate = event.detail.value;
    console.log('Selected date:', this.selectedDate);
  }
}
