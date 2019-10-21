import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-pack-create',
  templateUrl: './pack-create.component.html',
  styleUrls: ['./pack-create.component.css']
})
export class PackCreateComponent implements OnInit {
  pack: {id: number, name: string, count: number} = {id: null, name: "", count: null};

  constructor(public dataService: DataService) { }

  ngOnInit() {
  }

  createPack() {
    console.log(this.pack);
    this.dataService.createPack(this.pack);
    this.pack = {id: null, name: "", count: null};
  }
}
