import { Injectable } from '@angular/core';
import { Image } from './../models/image';



@Injectable()
export class ImageService {


  images: Image[] = [

    new Image('1','UN BOSQUE BONITO','DESCRIPCION DE LA IMAGEN ','http://www.paisajesimagenes.com/wp-content/uploads/Descripci%C3%B3n-de-paisajes..jpg','http://www.paisajesimagenes.com/wp-content/uploads/Descripci%C3%B3n-de-paisajes..jpg'),
    new Image('1','UN BOSQUE BONITO','DESCRIPCION DE LA IMAGEN ','http://www.paisajesimagenes.com/wp-content/uploads/Descripci%C3%B3n-de-paisajes..jpg','http://www.paisajesimagenes.com/wp-content/uploads/Descripci%C3%B3n-de-paisajes..jpg'),
    new Image('1','UN BOSQUE BONITO','DESCRIPCION DE LA IMAGEN ','http://www.paisajesimagenes.com/wp-content/uploads/Descripci%C3%B3n-de-paisajes..jpg','http://www.paisajesimagenes.com/wp-content/uploads/Descripci%C3%B3n-de-paisajes..jpg'),
    new Image('1','UN BOSQUE BONITO','DESCRIPCION DE LA IMAGEN ','http://www.paisajesimagenes.com/wp-content/uploads/Descripci%C3%B3n-de-paisajes..jpg','http://www.paisajesimagenes.com/wp-content/uploads/Descripci%C3%B3n-de-paisajes..jpg'),
    new Image('1','UN BOSQUE BONITO','DESCRIPCION DE LA IMAGEN ','http://www.paisajesimagenes.com/wp-content/uploads/Descripci%C3%B3n-de-paisajes..jpg','http://www.paisajesimagenes.com/wp-content/uploads/Descripci%C3%B3n-de-paisajes..jpg'),
    new Image('1','UN BOSQUE BONITO','DESCRIPCION DE LA IMAGEN ','http://www.paisajesimagenes.com/wp-content/uploads/Descripci%C3%B3n-de-paisajes..jpg','http://www.paisajesimagenes.com/wp-content/uploads/Descripci%C3%B3n-de-paisajes..jpg'),
    new Image('1','UN BOSQUE BONITO','DESCRIPCION DE LA IMAGEN ','http://www.paisajesimagenes.com/wp-content/uploads/Descripci%C3%B3n-de-paisajes..jpg','http://www.paisajesimagenes.com/wp-content/uploads/Descripci%C3%B3n-de-paisajes..jpg'),
    new Image('1','UN BOSQUE BONITO','DESCRIPCION DE LA IMAGEN ','http://www.paisajesimagenes.com/wp-content/uploads/Descripci%C3%B3n-de-paisajes..jpg','http://www.paisajesimagenes.com/wp-content/uploads/Descripci%C3%B3n-de-paisajes..jpg')

  ];

  constructor() { }

  getImages(){ return this.images; }



}
