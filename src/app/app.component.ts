import { Component, ViewChild } from '@angular/core';
import { MenuController, NavController, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { OptionsPage } from '../pages/options/options';
import { AuthPage } from '../pages/auth/auth';

import * as firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

    tabsPage:any = TabsPage;
    optionsPage:any = OptionsPage;
    authPage:any = AuthPage;
    isAuth:boolean;

    @ViewChild('content') content: NavController;

    constructor(platform: Platform,
                statusBar: StatusBar,
                splashScreen: SplashScreen,
                private menuCtrl: MenuController) {
        platform.ready().then(() => {
            statusBar.styleDefault();
            splashScreen.hide();
            let config = {
                apiKey: "AIzaSyBH9_dZS0Rz64HIxOZXVAEgtMdKHITNP7Y",
                authDomain: "ionic-oc-ba1cc.firebaseapp.com",
                databaseURL: "https://ionic-oc-ba1cc.firebaseio.com",
                projectId: "ionic-oc-ba1cc",
                storageBucket: "ionic-oc-ba1cc.appspot.com",
                messagingSenderId: "767466858293"
            };
            firebase.initializeApp(config);
            firebase.auth().onAuthStateChanged(
                (user) => {
                    if (user) {
                        this.isAuth = true;
                        this.content.setRoot(TabsPage);
                    } else {
                        this.isAuth = false;
                        this.content.setRoot(AuthPage, {mode: 'connect'});
                    }
                }
            );
        });
    }

    onNavigate(page: any, data?: {}) {
        this.content.setRoot(page, data ? data : null);
        this.menuCtrl.close();
    }

    onDisconnect() {
        firebase.auth().signOut();
        this.menuCtrl.close();
    }
}

