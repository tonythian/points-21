import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { Points21SharedModule } from 'app/shared/shared.module';
import { Points21CoreModule } from 'app/core/core.module';
import { Points21AppRoutingModule } from './app-routing.module';
import { Points21HomeModule } from './home/home.module';
import { Points21EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    Points21SharedModule,
    Points21CoreModule,
    Points21HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    Points21EntityModule,
    Points21AppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent],
})
export class Points21AppModule {}
