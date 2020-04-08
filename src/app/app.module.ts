import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { NewQuarantineeComponent } from './new-quarantinee/new-quarantinee.component';
import { ViewQuarantineesComponent } from './view-quarantinees/view-quarantinees.component';
import { FooterComponent } from './footer/footer.component';
import { AgmCoreModule } from '@agm/core';
import { from } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ToolbarComponent,
    NewQuarantineeComponent,
    ViewQuarantineesComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCEg2ZOPAAGKdVLOqFIwDi8R3VW-Dn-IVQ'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
