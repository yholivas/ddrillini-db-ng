import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // add pack banners later once I know how images work
  packs = [
    {id: 1, name: "Mute Sims", count: 10},
    {id: 2, name: "Notice Me Benpai", count: 12},
    {id: 3, name: "Sudziosis", count: 16},
    {id: 4, name: "Rikame's Simfiles", count: 13}
  ];

  constructor() { }

  public getPacks(): Array<{id: number, name: string, count: number}> {
    return this.packs;
  }

  public createPack(pack: {id: number, name: string, count: number}) {
    this.packs.push(pack);
  }
}
