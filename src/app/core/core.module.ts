import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SocialLinksComponent } from './social-links/social-links.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SocialLinksComponent
    ],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent, FooterComponent]
})
export class CoreModule { }
