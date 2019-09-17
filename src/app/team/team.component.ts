import { Component, OnInit } from '@angular/core';
import { LeagueTableService } from '../league-table.service'
import {ActivatedRoute,Router,ParamMap} from '@angular/router';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor(private _leagueTableService:LeagueTableService,private route:ActivatedRoute,private router:Router) { }

  public teamDetails;
  public currentYear=new Date().getFullYear();
  public itemsPerPage=6;
  public currentPage=0;
  public countLimit=this.itemsPerPage;

  ngOnInit() {
    this.currentYear=parseInt(this.currentYear.toString());

    this.route.paramMap.subscribe((params:ParamMap)=>{

    let teamId=parseInt(params.get('teamId'))

    this._leagueTableService.getTeam(teamId)
    .subscribe(data=> this.teamDetails=data);

    })
  }

  nextPage(){
    let squadLength=this.teamDetails.squad.length;

    this.currentPage+=this.itemsPerPage;

    this.countLimit+=this.itemsPerPage;

    if(this.currentPage>squadLength)this.currentPage-=this.itemsPerPage

    if(this.countLimit>Math.ceil(squadLength/this.itemsPerPage)*this.itemsPerPage)
      this.countLimit-=this.itemsPerPage
   
  }

  previousPage(){

    this.currentPage-=this.itemsPerPage;

    this.countLimit-=this.itemsPerPage;

    if(this.currentPage-this.itemsPerPage<0)this.currentPage=0

    if(this.countLimit-this.itemsPerPage<this.itemsPerPage)
      this.countLimit=this.itemsPerPage
    
   
  }

}
