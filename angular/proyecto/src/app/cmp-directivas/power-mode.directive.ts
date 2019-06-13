import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPowerMode]'
})
export class PowerModeDirective {

  @HostBinding('class') aplicarAnim1: string;
  @HostBinding('style.color') color: string;
  @HostBinding('style.marginTop') marginTop: string;
  @HostBinding('style.marginLeft') marginLeft: string;

  getRandomColor() {
    let rojo = Math.floor(Math.random()*256);
    let verde = Math.floor(Math.random()*256);
    let azul = Math.floor(Math.random()*256);
    return `rgb(${rojo}, ${verde}, ${azul})`;
  }

  constructor(private elemRef: ElementRef) { }

  @HostListener('input') cipri() {
    this.aplicarAnim1 = 'aplicarAnim1';
    this.color = this.getRandomColor();
    this.marginTop = '5px';
    this.marginLeft = '5px';
    setTimeout(() => {
      this.color = 'black';
      this.marginTop = '0';
      this.marginLeft = '0';
      this.aplicarAnim1 = '';
    }, 300)
  }

}
