import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  JHipster6Java11TestSharedLibsModule,
  JHipster6Java11TestSharedCommonModule,
  BpfLoginModalComponent,
  HasAnyAuthorityDirective
} from './';

@NgModule({
  imports: [JHipster6Java11TestSharedLibsModule, JHipster6Java11TestSharedCommonModule],
  declarations: [BpfLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [BpfLoginModalComponent],
  exports: [JHipster6Java11TestSharedCommonModule, BpfLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JHipster6Java11TestSharedModule {
  static forRoot() {
    return {
      ngModule: JHipster6Java11TestSharedModule
    };
  }
}
