import {NgModule} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {SearchPageComponent} from './search-page.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [SearchPageComponent],
  imports: [MatFormFieldModule,
    MatIconModule, MatInputModule, FormsModule, MatTableModule,
    CommonModule, BrowserAnimationsModule]
})
export class SearchPageModule {
}
