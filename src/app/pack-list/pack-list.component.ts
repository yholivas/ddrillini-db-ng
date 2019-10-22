import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';
import { Pack } from '../pack';

@Component({
  selector: 'app-pack-list',
  templateUrl: './pack-list.component.html',
  styleUrls: ['./pack-list.component.css']
})
export class PackListComponent implements OnInit {
  packs: Pack[];
  selectedPack: Pack;

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.dataService.getPacks()
      .subscribe(packs => this.packs = packs);
  }

  public selectPack(pack: Pack) {
    this.selectedPack = pack;
  }
}
