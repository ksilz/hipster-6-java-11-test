import { NgModule } from '@angular/core';

import { JHipster6Java11TestSharedLibsModule, FindLanguageFromKeyPipe, BpfAlertComponent, BpfAlertErrorComponent } from './';

@NgModule({
  imports: [JHipster6Java11TestSharedLibsModule],
  declarations: [FindLanguageFromKeyPipe, BpfAlertComponent, BpfAlertErrorComponent],
  exports: [JHipster6Java11TestSharedLibsModule, FindLanguageFromKeyPipe, BpfAlertComponent, BpfAlertErrorComponent]
})
export class JHipster6Java11TestSharedCommonModule {}
