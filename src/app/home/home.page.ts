import { Component } from '@angular/core';
import { Camera } from '@awesome-cordova-plugins/camera/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private camera: Camera) {}

  async selectVideo() {
    try {
      const result = await this.camera.getPicture({
        mediaType: this.camera.MediaType.VIDEO,
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
      });
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  }

}
