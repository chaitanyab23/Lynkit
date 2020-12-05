import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css'],
})
export class HooksComponent implements OnInit, OnChanges {
  constructor() {}

  ngOnInit(): void {}
  @Input() public data;

  ngOnChanges() {
    console.warn('data property is changed by parent');
  }
}
