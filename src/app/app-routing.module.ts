import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeagueTableComponent } from './league-table/league-table.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TeamComponent } from './team/team.component';
import { PlayerComponent } from './player/player.component';
import { FixturesComponent } from './fixtures/fixtures.component';
import { ScorersComponent } from './scorers/scorers.component';
import { TablesComponent } from './tables/tables.component';

const routes: Routes = [

{path:'',redirectTo:'/league/2021',pathMatch:'full'},

{path:'league',component:LeagueTableComponent},

{
	path:'league/:leagueId',
	component:LeagueTableComponent,
	children:[
	{path:'fixtures/:leagueId',component:FixturesComponent},
	{path:'scorers/:leagueId',component:ScorersComponent},
	{path:'table/:leagueId',component:TablesComponent}
	]
},

{path:'teams/:teamId',component:TeamComponent},

{path:'player/:playerId',component:PlayerComponent},

{path:'**',component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
