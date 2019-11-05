import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

import { FileService } from '../file.service';
import { PackService } from '../pack.service';
import { Pack } from '../pack';
import { SongService } from '../song.service';
import { Song } from '../song';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {
  pack: Pack;
  songs: Song[];
  banners: Map<number, string>;
  bannerData: any;

  constructor(
    private route: ActivatedRoute,
    private packServ: PackService,
    private songServ: SongService,
    private fileServ: FileService,
    private location: Location,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.banners = new Map();
    const id = +this.route.snapshot.paramMap.get('id');
    this.packServ.getPack(id)
      .subscribe(pack => {
        this.pack = pack;
        this.getSongs(pack.id);
      });
  }

  getSongs(id: number) {
    this.songServ.getSongsByPack(id)
      .subscribe(songs => {
        this.songs = songs;
        for (const song of songs) {
          this.recvBanner(song);
        }
      });
  }

  recvBanner(song: Song): void {
    this.fileServ.recvBanner(song.banner)
      .subscribe(data => this.banners.set(song.id, 'data:image/png;base64,' + data));
  }

  back(): void { this.location.back(); }
}
