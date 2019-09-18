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

  public leagueId=2021;//Premier league by default (2021-> Premier league id)
  public bannerName;
  public showingTable=false;
  public showingFixture=false;
  public showingScorer=false;

  ngOnInit() {
    //get the league id passed in the url via subscription
    this.route.paramMap.subscribe((params:ParamMap)=>{

      this.leagueId=parseInt(params.get('leagueId'))

      this.bannerName=this.leagueId;

      //show the table component by default
      this.showTable(this.leagueId)
    })
  }


  showFixtures(leagueId){
    this.deactivateLinks()
    this.showingFixture=true
    //navigate to fixture component
    this.router.navigate([`fixtures/${leagueId}`],{relativeTo:this.route});
  }


  showTable(leagueId){
    this.deactivateLinks()
    this.showingTable=true
    //navigate to tables component
    this.router.navigate([`table/${leagueId}`],{relativeTo:this.route});
  }


  showScorers(leagueId){
    this.deactivateLinks()
    this.showingScorer=true
    //navigate to scorers component
    this.router.navigate([`scorers/${leagueId}`],{relativeTo:this.route});
  }


  //this method removes highligths from the tab links( table, fixture and top scorer)
  deactivateLinks()
  {
    this.showingTable=false;
    this.showingFixture=false;
    this.showingScorer=false;
  }

}
