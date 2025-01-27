import { Component, OnInit } from '@angular/core';
import { IonTabBar, IonTabButton,IonTabs,} from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
  standalone: true, // Change this to true
  imports: [ IonTabBar, IonTabButton, IonTabs],
})
export class TabComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
