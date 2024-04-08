import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroService } from './heroes/hero.service';
import { AppRoutingModule,AppRoutingDeclarations } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        CommonModule,
        AppRoutingModule,
        HttpClientModule,
        // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
        // and returns simulated server responses.
        // Remove it when a real server is ready to receive requests.
        HttpClientInMemoryWebApiModule.forRoot(
            InMemoryDataService, { dataEncapsulation: false }
        ),
        FontAwesomeModule,
 
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        StarRatingComponent,
        NotFoundComponent, 
        ...AppRoutingDeclarations,
    ],
    providers: [
        HeroService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }