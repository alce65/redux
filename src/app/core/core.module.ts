import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SocialLinksComponent } from './social-links/social-links.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SocialLinksComponent,
    MenuComponent
    ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [HeaderComponent, FooterComponent]
})
export class CoreModule { }
