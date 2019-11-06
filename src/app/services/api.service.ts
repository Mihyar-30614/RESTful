import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProcessItem } from '../process-item';
import { TEXTBOXComponent } from '../text-box/text-box.component';
import { LISTBOXComponent } from '../listbox/listbox.component';
import { CHECKBOXComponent } from '../checkbox/checkbox.component';
import { TEXTAREAComponent } from '../textarea/textarea.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = "https://dev.megamation.com/o4w940/8503/dlwebOI10.php/O4W_API"
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  
  constructor(private http : HttpClient) { }

  getelements(branch : string): Observable<any> {
    return this.http.get(`${this.url}?branch=${encodeURI(branch)}`, this.httpOptions)
  }

  getElementType(elements) : ProcessItem[]{
    let result : ProcessItem[] = [];
    
    for (const element of elements) {
      let comp = this.resolveComponentType(element);
      if (comp) {
        let newItem = new ProcessItem(comp, element);
        result.push(newItem);
      }
    }

    return result;
  }

  resolveComponentType (item) {
    if (item.POS_CONTROL_TYPE == "TEXTBOX"){
      return TEXTBOXComponent;
    } else if (item.POS_CONTROL_TYPE == "LISTBOX") {
      return LISTBOXComponent;
    } else if (item.POS_CONTROL_TYPE == "CHECKBOX"){
      return CHECKBOXComponent;
    } else if(item.POS_CONTROL_TYPE == "TEXTAREA" || item.POS_CONTROL_TYPE == "SEARCH_TEXTAREA"){
      return TEXTAREAComponent;
    }
  }

}
