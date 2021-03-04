import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { CondominiumManagementApplicationSharedModule } from 'app/shared/shared.module';
import { CondominiumManagementApplicationCoreModule } from 'app/core/core.module';
import { CondominiumManagementApplicationAppRoutingModule } from './app-routing.module';
import { CondominiumManagementApplicationHomeModule } from './home/home.module';
import { CondominiumManagementApplicationEntityModule } from './entities/entity.module';
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
    CondominiumManagementApplicationSharedModule,
    CondominiumManagementApplicationCoreModule,
    CondominiumManagementApplicationHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    CondominiumManagementApplicationEntityModule,
    CondominiumManagementApplicationAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent],
})
export class CondominiumManagementApplicationAppModule {}
