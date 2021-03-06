import { Component, OnInit } from '@angular/core';
import { AccessibilityConfig, Image, ImageEvent } from '@ks89/angular-modal-gallery';

@Component({
  selector: 'app-hoofdscherm',
  templateUrl: './hoofdscherm.component.html',
  styleUrls: ['./hoofdscherm.component.css']
})
export class HoofdschermComponent implements OnInit {
  imageIndex = 1;
  galleryId = 1;
  autoPlay = true;
  showArrows = true;
  showDots = true;
  imagesRect: Image[] = [
    new Image(
      0,
      {
        img: 'assets/images/1.1.jpg',
        title: 'Voorkant',
        alt: 'Voorkant',
        description: 'Voorkant',
        ariaLabel: 'Voorkant'
      },
      {
        img: 'assets/images/1.1.jpg',
        title: 'Voorkant',
        alt: 'Voorkant',
        description: 'Voorkant',
        ariaLabel: 'Voorkant'
      }
    ),
    new Image(1, {
      img: 'assets/images/1.4.jpg',
      title: 'Tuin',
      alt: 'Tuin',
      description: 'Tuin',
      ariaLabel: 'Tuin'
    },
      {
        img: 'assets/images/1.4.jpg',
        title: 'Tuin',
        alt: 'Tuin',
        description: 'Tuin',
        ariaLabel: 'Tuin'
      }),
    new Image(
      2,
      {
        img: 'assets/images/2.2.jpg',
        title: 'Leefruimte',
        alt: 'Leefruimte',
        description: 'Leefruimte',
        ariaLabel: 'Leefruimte'
      },
      {
        img: 'assets/images/2.2.jpg',
        title: 'Leefruimte',
        alt: 'Leefruimte',
        description: 'Leefruimte',
        ariaLabel: 'Leefruimte'
      }
    ),
    new Image(
      3,
      {
        img: 'assets/images/4.1.jpg',
        title: 'Zitkamer',
        alt: 'Zitkamer',
        description: 'Zitkamer',
        ariaLabel: 'Zitkamer'
      },
      {
        img: 'assets/images/4.1.jpg',
        title: 'Zitkamer',
        alt: 'Zitkamer',
        description: 'Zitkamer',
        ariaLabel: 'Zitkamer'
      }
    ),
    new Image(
      4,
      {
        img: 'assets/images/2.6.jpg',
        title: 'Leefruimte',
        alt: 'Leefruimte',
        description: 'Leefruimte',
        ariaLabel: 'Leefruimte'
      },
      {
        img: 'assets/images/2.6.jpg',
        title: 'Leefruimte',
        alt: 'Leefruimte',
        description: 'Leefruimte',
        ariaLabel: 'Leefruimte'
      }
    ),
    new Image(5,
      {
        img: 'assets/images/3.1.jpg',
        title: 'Keuken',
        alt: 'Keuken',
        description: 'Keuken',
        ariaLabel: 'Keuken'
      }, {
      img: 'assets/images/3.1.jpg',
      title: 'Keuken',
      alt: 'Keuken',
      description: 'Keuken',
      ariaLabel: 'Keuken'
    }),
    new Image(6,
      {
        img: 'assets/images/c.jpg',
        title: 'Vroeger',
        alt: 'Vroeger',
        description: 'Vroeger',
        ariaLabel: 'Vroeger'
      }, {
      img: 'assets/images/c.jpg',
      title: 'Vroeger',
      alt: 'Vroeger',
      description: 'Vroeger',
      ariaLabel: 'Vroeger'
    })
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
