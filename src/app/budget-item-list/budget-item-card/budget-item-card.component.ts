import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.model';

@Component({
  selector: 'item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.scss']
})
export class BudgetItemCardComponent implements OnInit {

  @Input() item: BudgetItem;
  @Output() xButtonClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() cardClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {

  }

  onXButtonClick() {
    //Emit an event
    this.xButtonClick.emit();
  }

  onCardClick() {
    this.cardClick.emit();
  }

}