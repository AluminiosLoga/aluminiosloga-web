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
  imgListMobile1: any;
  imgListMobile2: any;

  constructor() {
    this.imgList1 = [
      'svc11.webp',
      'svc3.webp',
      'svc4.webp',
      'svc7.webp',
      'svc18.webp',
      'svc23.webp',
    ];

    this.imgList2 = [
      'svc16.webp',
      'svc8.webp',
      'svc5.webp',
      'svc10.webp',
      'svc6.webp',
    ];

    this.imgList3 = [
      'svc9.webp',
      'svc14.webp',
      'svc13.webp',
      'svc15.webp',
      'svc1.webp',
      'svc17.webp',
    ];

    this.imgList4 = [
      'svc2.webp',
      'svc19.webp',
      'svc20.webp',
      'svc21.webp',
      'svc22.webp',
      'svc12.webp',
    ];

    this.imgListMobile1 = [
      'svc11.webp',
      'svc3.webp',
      'svc4.webp',
      'svc16.webp',
      'svc8.webp',
      'svc5.webp',
      'svc10.webp',
      'svc6.webp',
      'svc7.webp',
      'svc18.webp',
      'svc23.webp',
    ];

    this.imgListMobile2 = [
      'svc9.webp',
      'svc14.webp',
      'svc13.webp',
      'svc2.webp',
      'svc19.webp',
      'svc20.webp',
      'svc21.webp',
      'svc22.webp',
      'svc12.webp',
      'svc15.webp',
      'svc1.webp',
      'svc17.webp',
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
