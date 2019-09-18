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
    //fetch the league id from the url
  	 this.route.paramMap.subscribe((params:ParamMap)=>{

      let leagueId=parseInt(params.get('leagueId'))

      //get the list of top scorers
      this._leagueTableService.getScorers(leagueId)
    .subscribe(data=>{
     
      this.scorers=data["scorers"];
       
    });
    
    })
  }

}
