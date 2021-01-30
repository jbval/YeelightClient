import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-simple-status',
  templateUrl: './simple-status.component.html',
  styleUrls: ['./simple-status.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class SimpleStatusComponent implements OnInit {
  @Input()
  state = false;
  @Input()
  hexColor: string = '#FFFFFF';
  @Input()
  intensity: number = 100;
  @Input()
  hue: number = 0;
  @Input()
  sat: number = 0;
  @Input()
  tempColor: number = 0;
  @Input()
  mode: number = 1;
  @Output() toggleState = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
