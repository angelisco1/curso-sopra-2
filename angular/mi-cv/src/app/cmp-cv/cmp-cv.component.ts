import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cmp-cv',
  templateUrl: './cmp-cv.component.html',
  styleUrls: ['./cmp-cv.component.css']
})
export class CmpCvComponent implements OnInit {

  @Input() nombre: string = '';
  @Input() apellidos: string = '';
  @Input() email: string = '';
  @Input() foto: string = '';
  @Input() skills: Array<string> = [];

  constructor() { }

  ngOnInit() {
  }

}
