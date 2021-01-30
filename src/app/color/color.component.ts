import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorComponent implements OnInit {
  @Input()
  hexCode: string = '';
  @Input()
  colorTemperature: number = 0;
  @Input()
  hue: number = 0;
  @Input()
  sat: number = 0;
  @Input()
  bright: number = 100;
  @Input()
  mode: number = 1;

  constructor() {}

  ngOnInit(): void {}

  get getHslCssColor() {
    return `hsl(${this.hue}, ${this.sat}, ${this.bright})`;
  }
}
