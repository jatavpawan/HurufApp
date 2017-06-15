import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { Platform } from 'ionic-angular';

import {SafeResourceUrl, DomSanitizer} from '@angular/platform-browser';
@Component({
    selector: 'page-Quran',
  templateUrl: 'Quran.html'
})
export class QuranPage {
    taboptionss: string;
        videoUrl: SafeResourceUrl;
    constructor(
        public navCtrl: NavController,
        private platfrom: Platform,
        private domSanitizer: DomSanitizer,
        private youtube: YoutubeVideoPlayer
    ) {
      var self = this;
      self.taboptionss = "Quran";        
 
      self.platfrom.ready().then((redy) => {
         // self.videoUrl = self.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/o06VNoOqzg8')

          //YoutubeVideoPlayer.openVideo("https://www.youtube.com/embed/o06VNoOqzg8");
          self.youtube.openVideo("https://www.youtube.com/watch?v=93ZU6j59wL4");
      });
  }

}
