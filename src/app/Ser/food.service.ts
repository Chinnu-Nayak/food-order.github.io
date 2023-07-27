import { Injectable } from '@angular/core';
import { Foods } from '../shared/models/food';
import { Tag } from '../shared/models/tag';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getFoodById(id:number):Foods{
    return this.getAll().find(food => food.id==id)!;
  }

  getAllFoodByTag(tag:string):Foods [] {
   return tag=='All'?
   this.getAll():this.getAll().filter(food => food.tag?.includes(tag));
  }
  getAllTag():Tag[]{
    return [
      {name:"All" ,count:8},
      {name:"chicken",count:3},
      {name:"veg",count:5},
      {name:"snacks",count:3},
      {name:"curry",count:2},
      {name:"biriyani",count:1}
    ];
  }
  getAll():Foods[] {
    return [
      
      {
        id: 1,
        price:1.2 ,
        name : 'paneeer butter masala',
        fevorite:false,
        star:   4.5,
        tag: ['fastfood','veg','paneer','lunch','curry'],
        imageUrl: '/assets/food3.avif',
        cookTime: '30-40',
        orgins: ['europe',' usa']
      },
      {
        id: 2,
        price:0.5 ,
        name : 'sandwich',
        fevorite:false,
        star:   4.0,
        tag: ['fastfood','veg','paneer','lunch','snacks','sandwich'],
        imageUrl: '/assets/food4.avif',
        cookTime: '10-15',
        orgins: ['france']
      },
      {
        id: 3,
        price:0.6 ,
        name : 'pasta',
        fevorite:false,
        star:   3.8,
        tag: ['fastfood','veg','pasta','snacks'],
        imageUrl: '/assets/food3.avif',
        cookTime: '20-30',
        orgins: ['japan']
      },
      {
        id: 4,
        price:1.4 ,
        name : 'tandoor chicken',
        fevorite:false,
        star:   5.0,
        tag: ['fastfood','non-veg','chicken','lunch','snacks','tandoor'],
        imageUrl: '/assets/food4.avif',
        cookTime: '20-25',
        orgins: ['INDIA🤙']
      },
      {
        id: 5,
        price:0.3 ,
        name : 'dal-fry',
        fevorite:false,
        star:   4.2,
        tag: ['veg','curry','dal','lunch',''],
        imageUrl: '/assets/food5.avif',
        cookTime: '10-20',
        orgins: ['INDIA🤙']
      },
      {
        id: 6,
        price:2.0 ,
        name : 'burgur',
        fevorite:true,
        star:   4.3,
        tag: ['fastfood','non-veg','chicken','dinner','snacks'],
        imageUrl: '/assets/food4.avif',
        cookTime: '30-35',
        orgins: ['usa']
      },
      {
        id: 7,
        price:1.8 ,
        name : 'BIRIYANI',
        fevorite:true,
        star:   4.4,
        tag: ['dinner','non-veg','chicken','lunch','','biriyani'],
        imageUrl: '/assets/food5.avif',
        cookTime: '10-15',
        orgins: ['afganistan']
      },
      {
        id: 8,
        price:2.3 ,
        name : 'pizza',
        fevorite:false,
        star:   4.9,
        tag: ['fastfood','veg','paneer','lunch','snacks'],
        imageUrl: '/assets/food3.avif',
        cookTime: '30-35',
        orgins: ['usa']
      }
     
      
    ]
  }
}
