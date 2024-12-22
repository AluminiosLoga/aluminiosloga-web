import { Component, OnInit } from '@angular/core';
declare var Lightbox: any;

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {
  imgList1: any;
  imgList2: any;
  imgList3: any;
  imgList4: any;

  constructor() {
    this.imgList1 = [
      'svc11.png',
      'svc3.png',
      'svc4.png',
      'svc7.png',
      'svc18.png',
      'svc23.png',
    ];

    this.imgList2 = [
      'svc16.png',
      'svc8.png',
      'svc5.png',
      'svc10.png',
      'svc6.png',
    ];

    this.imgList3 = [
      'svc9.png',
      'svc14.png',
      'svc13.png',
      'svc15.png',
      'svc1.png',
      'svc17.png',
    ];

    this.imgList4 = [
      'svc2.png',
      'svc19.png',
      'svc20.png',
      'svc21.png',
      'svc22.png',
      'svc12.png',
    ];
  }

  ngOnInit() {}

  ionViewDidEnter() {
    Lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    });

    const toolbar = document.getElementById('toolbar');
    toolbar?.classList.remove('transparent-toolbar');
    toolbar?.classList.add('white-toolbar');
  }
}
