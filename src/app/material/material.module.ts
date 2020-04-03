import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatFormFieldModule, MatSelectModule, MatOptionModule, MatDatepickerModule} from '@angular/material';

const MaterialComponents =[
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatSelectModule,
  MatOptionModule,
  MatDatepickerModule
]

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
