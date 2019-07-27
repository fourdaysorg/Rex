import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Campaigns',
      url: '/campaigns',
      icon: 'list'
    },
    {
      title:'Submit Campaign',
      url:'/lala',
      icon:'globe'
    },
    {
      title:'My Donations',
      url:'/lala',
      icon:'cube'
    },
    {
      title:'Receive Donations',
      url:'/receive-donation',
      icon:'heart'
    },
    {
      title:'Settings',
      url:'/lala',
      icon:'settings'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
