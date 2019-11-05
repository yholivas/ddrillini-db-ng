import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

import { DataService } from '../data.service';
import { Pack } from '../pack';
import { Song } from '../song';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {
  pack: Pack;
  banners: Map<number, string>;
  bannerData: any;

  constructor(
    private route: ActivatedRoute,
    private service: DataService,
    private location: Location,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.banners = new Map();
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getPack(id)
      .subscribe(pack => {
        this.pack = pack;
        for (const song of pack.songs) {
          this.recvBanner(song);
        }
      });
  }

  recvBanner(song: Song): void {
    this.service.recvBanner(song.banner)
      .subscribe(data => this.banners.set(song.id, 'data:image/png;base64,' + data));
  }

  back(): void { this.location.back(); }
}
