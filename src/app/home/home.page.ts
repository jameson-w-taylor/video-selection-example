import { Component } from '@angular/core';
import { Camera } from '@awesome-cordova-plugins/camera/ngx';
import { Filesystem } from '@capacitor/filesystem';

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
      // You should see something like this on iOS:
      // file:///var/mobile/Containers/Data/Application/{SOME_UNIQUE_IDENTIFIER_HERE}/tmp/{FILENAME_HERE}.{FILE_EXTENSION}
      console.log(result);
      // Log out stat for file
      const statResult = await Filesystem.stat({
        path: result
      });
      console.log(statResult);
    } catch (e) {
      console.log(e);
    }
  }

}
