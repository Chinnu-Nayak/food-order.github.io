import { Component,OnInit } from '@angular/core';
import { FoodService } from '../Ser/food.service';
import { Foods } from '../shared/models/food';
import { StarRatingComponent } from 'ng-starrating';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  food:Foods[]=[];
  constructor(private fs:FoodService,private router:ActivatedRoute){

  }
  ngOnInit(){
    this.router.params.subscribe(params =>{
      if(params['searchItem'])
      this.food=this.fs.getAll().filter(food=>food.name.toLowerCase().includes(params['searchItem'].toLowerCase()))
      else if( params['tag'])
      this.food=this.fs.getAllFoodByTag(params['tag'])
      else
    this.food=this.fs.getAll();

    })

  }
}
