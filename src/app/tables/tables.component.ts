import { Component, OnInit } from '@angular/core';
import { LeagueTableService } from '../league-table.service'
import {ActivatedRoute,Router,ParamMap} from '@angular/router';
 
@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  public standings=[];
  public bannerName='';

  constructor(private _leagueTableService:LeagueTableService,private route:ActivatedRoute,private router:Router) { }

    ngOnInit() {

    this.route.paramMap.subscribe((params:ParamMap)=>{

    let leagueId=parseInt(params.get('leagueId'))

    this._leagueTableService.getStanding(leagueId)
    .subscribe(data=>this.standings=data["standings"][0].table);

    this.bannerName=leagueId.toString();

    })

    }

}
