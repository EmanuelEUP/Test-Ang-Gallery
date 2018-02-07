import { Component, OnInit , Input} from '@angular/core';
import { Image } from './../../../models/image';
import { ImageService } from './../../../services/image.service';


@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styles: []
})
export class ImageListComponent implements OnInit {


 images: Image[] = [];
 selectedImage: Image;

  constructor(private imageservice: ImageService) { }

  ngOnInit() {

    this.images = this.imageservice.getImages();

  }


    onSelect(image: Image){

    this.selectedImage = image;

    }


}
