import { Component, OnInit } from '@angular/core';
import { LeagueTableService } from '../league-table.service'
import {ActivatedRoute,Router,ParamMap} from '@angular/router';


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})

export class PlayerComponent implements OnInit {

  constructor(private _leagueTableService:LeagueTableService,private route:ActivatedRoute,private router:Router) { }

  public image='assets/loading.gif';

  public playerInfo;

  public currentYear=new Date().getFullYear();

  ngOnInit() {
      this.currentYear=parseInt(this.currentYear.toString());

      this.route.paramMap.subscribe((params:ParamMap)=>{

      let playerId=parseInt(params.get('playerId'))

      this._leagueTableService.getPlayer(playerId)
      .subscribe(data=>{
      
        this.playerInfo=data;

        this._leagueTableService.getPlayerImage(data["name"])
        .subscribe(imageData=>{
        
          this.image=imageData["query"]["pages"][0]['thumbnail']['source']
        })

      });

      })
  }

}
