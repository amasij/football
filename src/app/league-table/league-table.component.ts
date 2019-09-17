import { Component, OnInit } from '@angular/core';
import { LeagueTableService } from '../league-table.service'
import {ActivatedRoute,Router,ParamMap} from '@angular/router';
  
@Component({
  selector: 'app-league-table',
  templateUrl: './league-table.component.html',
  styleUrls: ['./league-table.component.css']
})


export class LeagueTableComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router) { }

  public leagueId=2021;//Premier league by default
  public bannerName;
  public showingTable=false;
  public showingFixture=false;
  public showingScorer=false;

  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.leagueId=parseInt(params.get('leagueId'))
      this.bannerName=this.leagueId;
      this.showTable(this.leagueId)
    })
  }


  showFixtures(leagueId){
    this.deactivateLink(this.showingFixture)
    this.showingFixture=true
    this.router.navigate([`fixtures/${leagueId}`],{relativeTo:this.route});
  }


  showTable(leagueId){
    this.deactivateLink(this.showingTable)
    this.showingTable=true
    this.router.navigate([`table/${leagueId}`],{relativeTo:this.route});
  }


  showScorers(leagueId){
    this.deactivateLink(this.showingScorer)
    this.showingScorer=true
    this.router.navigate([`scorers/${leagueId}`],{relativeTo:this.route});
  }


  deactivateLink(activeLink)
  {
    this.showingTable=false;
    this.showingFixture=false;
    this.showingScorer=false;
  }

}
