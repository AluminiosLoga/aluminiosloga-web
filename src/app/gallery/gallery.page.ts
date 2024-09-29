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
      'svc1.png',
      'svc2.png',
      'svc3.png',
      'svc4.png',
      'svc5.png',
      'svc6.png',
    ];

    this.imgList2 = [
      'svc7.png',
      'svc8.png',
      'svc9.png',
      'svc10.png',
      'svc11.png',
      'svc12.png',
    ];

    this.imgList3 = [
      'svc13.png',
      'svc14.png',
      'svc15.png',
      'svc16.png',
      'svc17.png',
      'svc18.png',
    ];

    this.imgList4 = [
      'svc19.png',
      'svc20.png',
      'svc21.png',
      'svc22.png',
      'svc23.png',
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
