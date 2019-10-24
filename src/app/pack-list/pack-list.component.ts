import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

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
  imageData: any;

  constructor(private http: HttpClient,
              private sanitizer: DomSanitizer,
              public dataService: DataService) { }

  ngOnInit() {
    this.dataService.getPacks()
      .subscribe(packs => this.packs = packs);
  }

  public selectPack(pack: Pack) {
    this.selectedPack = pack;
    this.http.get(`api/fileserver/download/${pack.banner}`, {responseType: 'text'})
      .subscribe( data => this.imageData = 'data:image/png;base64,' + data);
  }
}
