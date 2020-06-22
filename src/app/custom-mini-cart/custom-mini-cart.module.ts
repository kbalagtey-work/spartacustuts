import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMiniCartComponent } from './custom-mini-cart.component';
import { ConfigModule, CmsConfig, I18nModule, UrlModule } from '@spartacus/core';
import { MiniCartComponent, IconModule } from '@spartacus/storefront';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [CustomMiniCartComponent],
  imports: [
    CommonModule,
    RouterModule,
    ConfigModule.withConfig({
      cmsComponents: {
        MiniCartComponent: {
          component: CustomMiniCartComponent,
        },
      },
    } as CmsConfig),
    UrlModule,
    IconModule,
    I18nModule,
  ],
  exports: [CustomMiniCartComponent],
  entryComponents: [CustomMiniCartComponent],
})
export class CustomMiniCartModule { }
