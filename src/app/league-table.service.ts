//This service serves as a provider for consuming the api.football-data.org APIs
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeagueTableService {


  private TOKEN='2b9e91ac864249f59c133f945bd209a5';
  
  constructor(private http:HttpClient) { }


  //get the ranking table of a given league, via the league id
  getStanding(leagueId)
  {
    let _url=`http://api.football-data.org/v2/competitions/${leagueId}/standings?standingType=TOTAL`;
    
    return this.http.get(_url,{headers: { 'X-Auth-Token':  this.TOKEN}});
  }


  //get the team details(history and squad list), via a given team id
  getTeam(teamId)
  {
    let _url=`http://api.football-data.org/v2/teams/${teamId}`;

    return this.http.get(_url,{headers: { 'X-Auth-Token':  this.TOKEN}});
  }


//get details of a paticular player via the player's id
  getPlayer(playerId)
  {

    let _url=`http://api.football-data.org/v2/players/${playerId}`;

    return this.http.get(_url,{headers: { 'X-Auth-Token':  this.TOKEN}});
  }


  //get the thumbnail of a player, via a wekipedia search .Player's name given as search query
  getPlayerImage(name)
  {
    let _url=`https://en.wikipedia.org/w/api.php?action=query&format=json&formatversion=2&prop=pageimages&piprop=thumbnail&pithumbsize=400&titles=${name.replace(' ','%20')}`;

    //The method jsonp is used instead of get to avoid Cross Origin Resource Sharing error(CORS)
    return this.http.jsonp(_url,'callback');
  }


  //get the scheduled fixtures of a particular competition vial the league id
  getFixtures(leagueId)
  {
    let _url=`http://api.football-data.org/v2/competitions/${leagueId}/matches?status=SCHEDULED`;
    
    return this.http.get(_url,{headers: { 'X-Auth-Token':  this.TOKEN}});

  }

  //get the top 10 goal scorers in a competion via the league id
  getScorers(leagueId)
  {

    let _url=`http://api.football-data.org/v2/competitions/${leagueId}/scorers`;
    
    return this.http.get(_url,{headers: { 'X-Auth-Token':  this.TOKEN}});
  
  }


}

