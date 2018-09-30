import { Injectable } from '@angular/core';
import { Color } from '../models/color.model';


@Injectable()
export class ColorsService {

  private colors: Color[] =[
    {
      color:"#4286f4",
      selected: false
    },
    {
      color:"#f44141",
      selected: false
    },
    {
      color:"#f1f441",
      selected: false
    },
    {
      color:"#61f441",
      selected: false
    },
    {
      color:"#41f4eb",
      selected: false
    },
    {
      color:"#eb41f4",
      selected: false
    },
    {
      color:"#f441a3",
      selected: false
    },
    {
      color:"#f48b41",
      selected: false
    },
    {
      color:"#ffffff",
      selected: false
    },
    {
      color:"#f1f441",
      selected: false
    },
    {
      color:"#61f441",
      selected: false
    },
    {
      color:"#41f4eb",
      selected: false
    },
    {
      color:"#eb41f4",
      selected: false
    },
    {
      color:"#f441a3",
      selected: false
    },
    {
      color:"#f48b41",
      selected: false
    },
    {
      color:"#ffffff",
      selected: false
    },
    {
      color:"#f1f441",
      selected: false
    },
    {
      color:"#61f441",
      selected: false
    },
    {
      color:"#41f4eb",
      selected: false
    },
    {
      color:"#eb41f4",
      selected: false
    },
    {
      color:"#f441a3",
      selected: false
    },
    {
      color:"#f48b41",
      selected: false
    },
    {
      color:"#ffffff",
      selected: false
    },
    {
      color:"#f1f441",
      selected: false
    },
    {
      color:"#61f441",
      selected: false
    },
    {
      color:"#41f4eb",
      selected: false
    },
    {
      color:"#eb41f4",
      selected: false
    },
    {
      color:"#f441a3",
      selected: false
    },
    {
      color:"#f48b41",
      selected: false
    },
    {
      color:"#ffffff",
      selected: false
    },
    {
      color:"#f1f441",
      selected: false
    },
    {
      color:"#61f441",
      selected: false
    },
    {
      color:"#41f4eb",
      selected: false
    },
    {
      color:"#eb41f4",
      selected: false
    },
    {
      color:"#f441a3",
      selected: false
    },
    {
      color:"#f48b41",
      selected: false
    },
    {
      color:"#ffffff",
      selected: false
    },
    {
      color:"#000000",
      selected: false
    }
  ];

  constructor() {}

  getColors(){
    return this.colors;
  }

  getColor(id){
    return this.colors[id];
  }

}
