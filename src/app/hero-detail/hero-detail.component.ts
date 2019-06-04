import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  // get input from parent component which is heroes
  // pass in input by given hero =>  [hero]="selectedHero"
  @Input() hero: Hero;
  constructor() { }

  ngOnInit() {
  }

}
