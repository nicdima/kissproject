import { Component, OnInit } from '@angular/core';
import { NewssourcesService } from '../services/newssources.service';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  allsources: any = [];
  constructor(private sourcesService: NewssourcesService) {}

  ngOnInit(): void {
    this.sourcesService.getNewsSources().subscribe((data) => {
      console.log(data);
      this.allsources = data.sources;
    });
  }
}
