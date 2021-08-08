import { Component, OnInit } from '@angular/core';
import { ValueService } from '../value.service';
import {BehaviorSubject, Subscription} from 'rxjs'

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.css']
})
export class View1Component implements OnInit {
  max = 100
  min = 0
  step = 1

  constructor(private valueService: ValueService) { }

  value = this.valueService.getValue();

  ngOnInit(): void {
  }

  updateSliderValue(event:number){
    if (event > 50){
      event = 50;
    }
    this.valueService.updateValue(event);
  }
}
