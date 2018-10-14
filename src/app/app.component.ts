import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Government Jobs',
      url: '/latest-govt-jobs',
      icon: 'megaphone'
    },
    {
      title: 'Jobs In Abroad',
      url: '/jobs-in-abroad',
      icon: 'paper-plane'
    },
    {
      title: 'Jobs Closing Soon',
      url: '/jobs-closing-soon',
      icon: 'clock'
    },
    {
      title: 'Upcoming Jobs',
      url: '/upcoming-jobs',
      icon: 'calendar'
    },
    {
      title: 'Bank Jobs',
      url: '/bank-jobs',
      icon: 'list'
    },
    {
      title: 'Clerical Jobs',
      url: '/clerical-jobs',
      icon: 'desktop'
    },
    {
      title: 'Defence Jobs',
      url: '/defence-jobs',
      icon: 'medal'
    },
    {
      title: 'Police Jobs',
      url: '/police-jobs',
      icon: 'ribbon'
    },
    {
      title: 'Railway Jobs',
      url: '/railway-jobs',
      icon: 'train'
    },
    {
      title: 'About Us',
      url: '/about-us',
      icon: 'information-circle'
    },
    {
      title: 'Privacy Policy',
      url: '/privacy-policy',
      icon: 'document'
    },
    {
      title: 'Contact Us',
      url: '/contact-us',
      icon: 'mail'
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
