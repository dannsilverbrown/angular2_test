import { NgModule } from '@angular/core';
// import { IonicModule } from 'ionic-angular';
import { NewPage } from './new-page';

@NgModule({
  declarations: [
    NewPage,
  ],
  // imports: [
  //   IonicModule.forChild(NewPage),
  // ],
  exports: [
    NewPage
  ]
})
export class NewPageModule {}
