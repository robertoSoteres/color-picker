import { Component, ElementRef } from '@angular/core';
import { ColorsService } from '../../services/colors.service';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.css'],
  host: {
    '(document:click)': 'closePopover($event)',
  }
})
export class PopoverComponent {
  colors:any = {};
  codigoColor:String = '';
  isOpen:boolean = false;
  constructor(private colorsService: ColorsService,
    private el: ElementRef){
    this.colors = colorsService.getColors().sort(this.compareColors);
  }

  changeState(color){
    for (let i = 0; i < this.colors.length; i++) {
      this.colors[i].selected = false;      
    }
    color.selected = true;
  }

  selectColor(color){
    this.codigoColor = color.color;
    this.isOpen = false;
    this.changeState(color);
  }

  popover(){
    if(this.isOpen){
      this.isOpen = false;
    }
    else{
      this.isOpen = true;
    }
  }

  closePopover(event) {
    if (!this.el.nativeElement.contains(event.target)){
      this.isOpen = false;
    }
  }

  resetColor(){
    this.codigoColor = '';
    this.isOpen = false;
    this.resetSelectedColor();
  }

  resetSelectedColor(){
    for (let i = 0; i < this.colors.length; i++) {
      this.colors[i].selected = false;
    }
  }

  compareColors(a,b) {
    if (a.color < b.color)
      return -1;
    if (a.color > b.color)
      return 1;
    return 0;
  }

}



