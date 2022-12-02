import { Component } from '@angular/core';
import { TranslationService } from '../api/translation.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  input:string = ''
  output:string = ''

  constructor(private api: TranslationService) {}

  btnTranlateClicked() {
    //this.output = this.input
    this.api.getTranslation(this.input).subscribe((data:any) => {
      this.output = data.responseData.translatedText
    })
  }

}
