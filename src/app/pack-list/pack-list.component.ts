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
  images: Map<number, string>;
  imageData: any;

  constructor(private http: HttpClient,
              private sanitizer: DomSanitizer,
              public dataService: DataService) { }

  ngOnInit() {
    this.images = new Map();
    this.dataService.getPacks()
      .subscribe(packs => {
        this.packs = packs;
        for (const pack of packs) {
          this.recvBanner(pack);
        }
      });
  }

  public recvBanner(pack: Pack): void {
    this.dataService.recvBanner(pack.banner)
      .subscribe( data => this.images.set(pack.id, 'data:image/png;base64,' + data));
  }
}
