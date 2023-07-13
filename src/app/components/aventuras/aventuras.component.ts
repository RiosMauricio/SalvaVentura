import { Component } from '@angular/core';
import { PhotoServiceService } from 'src/app/services/photo-service.service';

@Component({
  selector: 'app-aventuras',
  templateUrl: './aventuras.component.html',
  styleUrls: ['./aventuras.component.css']
})
export class AventurasComponent {

  displayBasic: boolean = false;
  images!: any[];
  
  responsiveOptions: any[] = [
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
  
  constructor(private photoService: PhotoServiceService) {}
  
  ngOnInit() {
    this.photoService.getImages().then((images) => {
      this.images = images;
    });
  }
  
  showGalleria() {
    this.displayBasic = true;
  }
  
  onGalleriaShow() {
    this.displayBasic = true;
  }
  
  onGalleriaHide() {
    this.displayBasic = false;
  }

}
