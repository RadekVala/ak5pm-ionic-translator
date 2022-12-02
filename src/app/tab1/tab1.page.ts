import { Component } from '@angular/core';
import { TranslationService } from '../api/translation.service';

import { LoadingController } from '@ionic/angular';
import { HistoryRecord } from '../models/history-record';
import { HistoryService } from '../api/history.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  input:string = ''
  output:string = ''
  private loading: any

  constructor(
    private api: TranslationService,
    private historyService: HistoryService,
    private loadingCtrl: LoadingController
  ) {}

  btnTranlateClicked() {
    //this.output = this.input
    this.showLoading()
    this.api.getTranslation(this.input).subscribe((data:any) => {
      this.output = data.responseData.translatedText
      let record = new HistoryRecord(this.input, this.output)
      console.log(record.input);
      this.historyService.saveHistory(record)
      this.loading.dismiss();
    })
  }

  async showLoading() {
    this.loading = await this.loadingCtrl.create({
      message: 'Searching for translation...',
    });

    this.loading.present();
  }

}
