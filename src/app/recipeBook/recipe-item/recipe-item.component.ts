import { Component, Input, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe-service.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe?: any;

  constructor() {

   }

  ngOnInit(): void {
  }
}
