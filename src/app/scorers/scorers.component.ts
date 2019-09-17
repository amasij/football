import { Component, OnInit } from '@angular/core';
import { LeagueTableService } from '../league-table.service'
import {ActivatedRoute,Router,ParamMap} from '@angular/router';

@Component({
  selector: 'app-scorers',
  templateUrl: './scorers.component.html',
  styleUrls: ['./scorers.component.css']
})
export class ScorersComponent implements OnInit {

   constructor(private _leagueTableService:LeagueTableService,private route:ActivatedRoute,private router:Router) { }

public scorers;
  ngOnInit() {
  	 this.route.paramMap.subscribe((params:ParamMap)=>{
      let leagueId=parseInt(params.get('leagueId'))

      this._leagueTableService.getScorers(leagueId)
    .subscribe(data=>{
     
      this.scorers=data["scorers"];
       console.log(this.scorers)
      //console.log(data["standings"][0])
    });
    
    })
  }

}
