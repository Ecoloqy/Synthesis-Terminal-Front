import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  backgroundImage: String = "url('/api/resources/img/background-image.jpg')";

  constructor() { }

  ngOnInit(): void {
  }

}
