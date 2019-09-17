import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { LeagueTableComponent } from './league-table/league-table.component';
import { FooterComponent } from './footer/footer.component';
import { LeagueTableService } from './league-table.service';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TeamComponent } from './team/team.component';
import { PlayerComponent } from './player/player.component';
import { FixturesComponent } from './fixtures/fixtures.component';
import { ScorersComponent } from './scorers/scorers.component';
import { TablesComponent } from './tables/tables.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    LeagueTableComponent,
    FooterComponent,
    PageNotFoundComponent,
    TeamComponent,
    PlayerComponent,
    FixturesComponent,
    ScorersComponent,
    TablesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule
    
  ],
  providers: [LeagueTableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
