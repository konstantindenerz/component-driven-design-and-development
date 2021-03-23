import {NgModule} from '@angular/core';
import {AppBarComponent} from './app-bar.component';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [AppBarComponent],
  imports: [MatToolbarModule]
})
export class AppBarModule {
}
