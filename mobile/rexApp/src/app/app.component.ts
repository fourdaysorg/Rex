import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { GlobalService } from './global.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public global: GlobalService
  ) {

    this.appPages.push({
      title: 'Home',
      url: '/home',
      icon: 'home'
    });
    this.appPages.push({
      title: 'Campaigns',
      url: '/campaigns',
      icon: 'list'
    });
    this.appPages.push({
      title: 'My Donations',
      url: '/lala',
      icon: 'cube'
    });
    if (global.user.isOng) {
      this.appPages.push({
        title: 'Submit Campaign',
        url: '/lala',
        icon: 'globe'
      });
      this.appPages.push({
        title: 'Receive Donations',
        url: '/receive-donation',
        icon: 'heart'
      });
    }
    this.appPages.push({
      title: 'Settings',
      url: '/lala',
      icon: 'settings'
    });






    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
