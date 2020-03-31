import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { from } from 'rxjs';

const MaterialComponents = [
  MatButtonModule
];

@NgModule({
  imports: [MaterialComponents],
  exports:[MaterialComponents]
})
export class MaterialModule { }
