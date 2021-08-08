import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValueService {

  value : number = 50;

  constructor() { }

  public getValue(){
    return this.value;
  }

  public updateValue(value: number): void {
    this.value = value;
  }
}
