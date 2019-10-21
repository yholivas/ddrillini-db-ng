import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

@Component({
  selector: 'app-pack-list',
  templateUrl: './pack-list.component.html',
  styleUrls: ['./pack-list.component.css']
})
export class PackListComponent implements OnInit {
  packs;
  selectedPack;

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.packs = this.dataService.getPacks();
  }

  public selectPack(pack) {
    this.selectedPack = pack;
  }
}
