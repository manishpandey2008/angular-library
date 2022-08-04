import { NgModule } from '@angular/core';
import { MagicStringComponent } from './magic-string.component';
import { TestComponentComponent } from './components/test-component/test-component.component';



@NgModule({
  declarations: [
    MagicStringComponent,
    TestComponentComponent,
  ],
  imports: [
  ],
  exports: [
    MagicStringComponent,
    TestComponentComponent
  ]
})
export class MagicStringModule { }
