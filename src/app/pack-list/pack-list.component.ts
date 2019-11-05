import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

import { PackService } from '../pack.service';
import { FileService } from '../file.service';
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

  constructor(
    private http: HttpClient,
    private sanitizer: DomSanitizer,
    private packServ: PackService,
    private fileServ: FileService
  ) { }

  ngOnInit() {
    this.images = new Map();
    this.packServ.getPacks()
      .subscribe(packs => {
        this.packs = packs;
        for (const pack of packs) {
          this.recvBanner(pack);
        }
      });
  }

  public recvBanner(pack: Pack): void {
    this.fileServ.recvBanner(pack.banner)
      .subscribe( data => this.images.set(pack.id, 'data:image/png;base64,' + data));
  }
}
