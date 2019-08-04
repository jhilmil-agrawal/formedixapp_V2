import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
  
export class ImageserviceService {

  constructor(private http: HttpClient) { }

 // call api to get images

 getImages(page: number){
   return this.http.get('https://jsonplaceholder.typicode.com/photos?_page='+page);
   
   //return this.http.get('https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=b5649a12d5ad2418b2c646abe9c9f8c3&gallery_id=66911286-72157647277042064&format=json&nojsoncallback=1'+page);

  
 
  }

}
 //key e6a86307eb73683b09d64b9e710315c2

//secret 1a5181699df21f7a