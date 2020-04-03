import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule, MatIconModule} from '@angular/material';

const MaterialComponents =[
  MatButtonModule,
  MatToolbarModule,
  MatIconModule
]

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
