import { Injectable } from '@angular/core';
import { HistoryRecord } from '../models/history-record';

import { Preferences } from '@capacitor/preferences';


@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  historyArray: HistoryRecord[] = []

  constructor() {
    this.loadState();
  }


  async loadState () {
    const { value } = await Preferences.get({ key: 'history' });
    if(value){
      this.historyArray = JSON.parse(value)
    }
  }

  async saveHistory(record: HistoryRecord) {
    console.log(record)
    this.historyArray.unshift(record)
    console.log(this.historyArray)
    await Preferences.set({
      key: 'history',
      value: JSON.stringify(this.historyArray),
    });
  };
}
