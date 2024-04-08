import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroRoutingDeclarations, HeroRoutingModule } from './hero-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../../in-memory-data.service';
import { MessagesComponent } from '../../messages/messages.component';
import { HeroSearchComponent } from '../../hero-search/hero-search.component';



@NgModule({
  declarations: [
    MessagesComponent,
    HeroSearchComponent,
    ...HeroRoutingDeclarations
  ],
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
        InMemoryDataService, { dataEncapsulation: false }
    ),
    HeroRoutingModule,
  ]
})
export class HeroModule { }
