import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BottomDrawerPage } from './bottom-drawer.page';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OkodeNgxCustomPaletteModule } from 'custom-palette'; // from local
import { IonBottomDrawerModule } from 'ion-bottom-drawer';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OkodeNgxCustomPaletteModule,
    IonBottomDrawerModule,
    RouterModule.forChild([{ path: '', component: BottomDrawerPage }])
  ],
  exports: [],
  declarations: [BottomDrawerPage]
})
export class BottomDrawerPageModule {}
