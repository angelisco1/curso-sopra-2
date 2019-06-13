import { Directive, ElementRef, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appMarcar]'
})
export class MarcarDirective implements OnInit {
  @Input('appMarcar') color: string = 'yellow';
  @HostBinding('style.backgroundColor') colorFondo: string;

  constructor(private elemRef: ElementRef) {
    // console.log(elemRef.nativeElement)
  }

  ngOnInit() {
    // this.elemRef.nativeElement.style.backgroundColor = 'yellow';
    // this.elemRef.nativeElement.classList.add('letraAzul');
    // this.elemRef.nativeElement.addEventListener('click', () => {
    //   console.log('Algo')
    // })
  }

  @HostListener('mouseover') onmouseover() {
    this.colorFondo = this.color;
  }

  @HostListener('mouseleave') onmouseleave() {
    this.colorFondo = 'white';
  }

  @HostListener('click') onclick() {
    console.log('Algo')
  }

}
