import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';



@NgModule({
   exports: [
   MatButtonModule,
   MatCardModule,
   MatIconModule,
   MatListModule,
   MatFormFieldModule,
   MatDialogModule,
   MatTableModule,
   MatSidenavModule,
   MatToolbarModule,
  ]
})
export class MaterialModule { }
