import { Component, OnInit } from '@angular/core';
import { DrawerState } from 'ion-bottom-drawer';

@Component({
  selector: 'app-bottom-drawer',
  templateUrl: './bottom-drawer.page.html',
  styleUrls: ['./bottom-drawer.page.scss'],
})
export class BottomDrawerPage implements OnInit {

  drawerState: DrawerState = DrawerState.Top;
  minimumHeight = 100;
  dockedHeight = 167;
  shouldBounce = true;
  distanceTop = 900;

  showBottomDrawer = true;

  constructor() { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    // tslint:disable:max-line-length
    const drawerHeight = document.getElementsByClassName('drawer-content-without-arrow')[0].clientHeight;
    this.distanceTop = document.getElementById('content-page').clientHeight - drawerHeight + document.getElementById('header').clientHeight;
    this.dockedHeight = drawerHeight - (document.getElementsByClassName('boxes')[0].clientHeight / 2);
    this.minimumHeight = drawerHeight - (document.getElementsByClassName('boxes')[0].clientHeight / 2);
    this.drawerState = DrawerState.Docked;
    this.showBottomDrawer = false;
  }

  setDrawerState() {
    if (this.drawerState === DrawerState.Bottom) {
      this.drawerState = DrawerState.Docked;
    }
  }

}
