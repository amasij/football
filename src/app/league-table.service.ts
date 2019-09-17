import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeagueTableService {


  private TOKEN='2b9e91ac864249f59c133f945bd209a5';
  
  constructor(private http:HttpClient) { }


  getStanding(leagueId)
  {
    let _url=`http://api.football-data.org/v2/competitions/${leagueId}/standings?standingType=TOTAL`;
    
    return this.http.get(_url,{headers: { 'X-Auth-Token':  this.TOKEN}});
  }


  getTeam(teamId)
  {
    let _url=`http://api.football-data.org/v2/teams/${teamId}`;

    return this.http.get(_url,{headers: { 'X-Auth-Token':  this.TOKEN}});
  }


  getPlayer(playerId)
  {

    let _url=`http://api.football-data.org/v2/players/${playerId}`;

    return this.http.get(_url,{headers: { 'X-Auth-Token':  this.TOKEN}});
  }

  getPlayerImage(name)
  {
    let _url=`https://en.wikipedia.org/w/api.php?action=query&format=json&formatversion=2&prop=pageimages&piprop=thumbnail&pithumbsize=400&titles=${name.replace(' ','%20')}`;

    return this.http.jsonp(_url,'callback');
  }

  getFixtures(leagueId)
  {
    let _url=`http://api.football-data.org/v2/competitions/${leagueId}/matches?status=SCHEDULED`;
    
    return this.http.get(_url,{headers: { 'X-Auth-Token':  this.TOKEN}});

  }

  getScorers(leagueId)
  {

    let _url=`http://api.football-data.org/v2/competitions/${leagueId}/scorers`;
    
    return this.http.get(_url,{headers: { 'X-Auth-Token':  this.TOKEN}});
  
  }


}

