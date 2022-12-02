import { Component } from '@angular/core';
import { HistoryService } from '../api/history.service';
import { HistoryRecord } from '../models/history-record';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  records: HistoryRecord[] = []

  constructor(private historyService: HistoryService) {}

  ionViewDidEnter() {
    this.records = this.historyService.historyArray
  }
}
