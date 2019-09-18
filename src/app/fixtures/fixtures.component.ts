import { Component, OnInit } from '@angular/core';
import { LeagueTableService } from '../league-table.service'
import {ActivatedRoute,Router,ParamMap} from '@angular/router';

@Component({
  selector: 'app-fixtures',
  templateUrl: './fixtures.component.html',
  styleUrls: ['./fixtures.component.css']
})


export class FixturesComponent implements OnInit {

  constructor(private _leagueTableService:LeagueTableService,private route:ActivatedRoute,private router:Router) { }

  public fixtures;

    ngOnInit() {

      ////fetch the league id from the url
      this.route.paramMap.subscribe((params:ParamMap)=>{

      let leagueId=parseInt(params.get('leagueId'))

      //get fixtures about the league
      this._leagueTableService.getFixtures(leagueId)
      .subscribe(data=>this.fixtures=data["matches"]);

      })
    }


}
