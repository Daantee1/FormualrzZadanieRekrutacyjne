import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomerdate]'
})
export class CustomerdateDirective {

  @Input('appCustomerdate') creationDate: string;

  private paragraph = this.renderer.createElement('p');

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') 
  onMouseEnter() {
    const date = new Date(this.creationDate);
    const formattedDate = isNaN(date.getTime()) ? 'Unknown creation date' : date.toLocaleString();
    this.renderer.setProperty(this.paragraph, 'textContent', `Created on ${formattedDate}`);
    this.renderer.appendChild(this.el.nativeElement, this.paragraph)
  }

  @HostListener('mouseleave') 
  onMouseLeave() {
    this.renderer.removeChild(this.el.nativeElement, this.paragraph)
  }


  
}
