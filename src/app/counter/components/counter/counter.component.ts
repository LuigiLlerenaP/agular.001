import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <div class="counter-card">
      <div class="counter-card__header">
        <h2 class="counter-card__title">Value Counter</h2>
      </div>

      <div class="counter-card__body">
        <p class="counter-card__description">
          You can increase or decrease the value: {{ currentValue }}
        </p>
        <button class="counter-card__button counter-card__button--increment" (click)="incrementValue()">
          Increase (+1)
        </button>
        <button class="counter-card__button counter-card__button--decrement" (click)="decrementValue()">
          Decrease (-1)
        </button>
        <button class="counter-card__button counter-card__button--reset" (click)="resetValue()">
          Reset Value
        </button>

      </div>
    </div>
  `,
  styleUrl: 'counter.component.css'
})
export class CounterComponent {
  public currentValue: number = 0;

  incrementValue(): void {
    this.currentValue += 1;
  }

  decrementValue(): void {
    if (this.currentValue > 0) {
      this.currentValue -= 1;
    }
  }
  resetValue():void {
    this.currentValue=0;
  }
}
