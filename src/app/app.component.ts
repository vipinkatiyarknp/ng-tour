import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showTourFlag = true;
  tourData: any;
  tourConfig = [{
    id: 'elem1',
    heading: 'Tour Element 1',
    description: 'Tour Element Description 1.',
    pos: ''
  }, {
    id: 'elem2',
    heading: 'Tour Element 2',
    description: 'Tour Element Description 2.',
    pos: ''
  }, {
    id: 'elem3',
    heading: 'Tour Element 3',
    description: 'Tour Element Description 3.',
    pos: ''
  }];
  ngOnInit() {
    this.tourData = this.tourConfig;
  }

}
