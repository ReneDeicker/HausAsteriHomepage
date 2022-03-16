import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals/global';


@Component({
  selector: 'app-image-view',
  templateUrl: './image-view.component.html',
  styleUrls: ['./image-view.component.scss']
})
export class ImageViewComponent implements OnInit {

  imageNames: string[] =[
    "img1.png",
    "img2.png",
    "img3.png",
    "img4.png",
    "img5.png",
    "img6.png"
  ];

  activeIndex: number = 0;
  displayBasic!: boolean;

  responsiveOptions2:any[] = [
    {
        breakpoint: '1500px',
        numVisible: 5
    },
    {
        breakpoint: '1024px',
        numVisible: 3
    },
    {
        breakpoint: '768px',
        numVisible: 2
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
];
responsiveOptions:any[] = [
  {
      breakpoint: '1024px',
      numVisible: 1
  },
  {
      breakpoint: '768px',
      numVisible: 1
  },
  {
      breakpoint: '560px',
      numVisible: 1
  }
];

  constructor(public globals: Globals) { }

  ngOnInit(): void {
    //this.openGaleria(0);
  }

  openGaleria(index: number){
    this.activeIndex = index;
    this.displayBasic = true;
  }
}

