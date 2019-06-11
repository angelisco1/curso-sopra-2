import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cmp-inferior2',
  templateUrl: './cmp-inferior2.component.html',
  styleUrls: ['./cmp-inferior2.component.css']
})
export class CmpInferior2Component implements OnInit {
  @Input() nombreHermano1: string = '';
  constructor() { }

  ngOnInit() {
  }

}
