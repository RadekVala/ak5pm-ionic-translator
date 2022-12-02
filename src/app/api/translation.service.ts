import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  constructor(private http: HttpClient) { }

  getTranslation(input:string){
    return this.http.get("https://api.mymemory.translated.net/get?q=" + input + "&langpair=en|cs")
  }
}
