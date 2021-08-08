import { Component, OnInit } from '@angular/core';
import { ValueService } from '../value.service';

@Component({
  selector: 'app-view2',
  templateUrl: './view2.component.html',
  styleUrls: ['./view2.component.css']
})
export class View2Component implements OnInit {
  max = 100
  min = 0
  step = 1

  constructor(private valueService: ValueService) { }

  value = this.valueService.getValue();

  ngOnInit(): void {
  }

  updateSliderValue(event: number){
    if (event < 50) {
      event = 50;
    }
    if (event > 75) {
      event = 75
    }
    this.valueService.updateValue(event);
  }

}
