import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './materialmodule/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { RoutingModule } from './routing/routing.module';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { GridPresse } from './home/grid-presse/grid-presse.component';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';
import { LeafMapComponent } from '../carto/leaf-map/leaf-map.component';
import {FormsModule} from '@angular/forms';
import {LoginComponent} from './login/login.component';
import {ReactiveFormsModule} from '@angular/forms';

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {MatCardModule, MatInputModule, MatProgressSpinnerModule} from '@angular/material';
import {LoaderComponent} from './loader/loader.component';
import {LoaderService} from './services/loader/loader.service';
import {LoaderInterceptor} from './interceptors/loader/loader.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    HeaderComponent,
    SidenavListComponent,
    FooterComponent,
    GridPresse,
    LeafMapComponent,
    LoginComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    RoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatInputModule,
    MatCardModule,
    MatProgressSpinnerModule,
    LeafletModule.forRoot(),
    FormsModule
  ],
  providers: [LoaderService,
    {provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
