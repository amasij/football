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

  //get the current year, used to calculate teh player's age
  public currentYear=new Date().getFullYear();

  ngOnInit() {

      this.currentYear=parseInt(this.currentYear.toString());

      //fetch the player id from the url
      this.route.paramMap.subscribe((params:ParamMap)=>{

      let playerId=parseInt(params.get('playerId'))

      //get data about the player
      this._leagueTableService.getPlayer(playerId)
      .subscribe(data=>{
      
        this.playerInfo=data;

        //fet image of the player, through the wikepedia API
        this._leagueTableService.getPlayerImage(data["name"])
        .subscribe(imageData=>{
        
          this.image=imageData["query"]["pages"][0]['thumbnail']['source']
        })

      });

      })
  }

}
