import { FlaskServiceService } from './flask-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flask-s',
  templateUrl: './flask-s.component.html',
  styleUrls: ['./flask-s.component.css']
})
export class FlaskSComponent implements OnInit {

  greeting: String = "";
  constructor(private service: FlaskServiceService) { }

  ngOnInit() {
    this.service.getData().subscribe(data => {
      console.log(data);
      this.greeting = data.text;
    })
  }

}
