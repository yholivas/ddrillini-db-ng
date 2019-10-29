import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../data.service';
import { Pack } from '../pack';

@Component({
  selector: 'app-pack-create',
  templateUrl: './pack-create.component.html',
  styleUrls: ['./pack-create.component.css']
})
export class PackCreateComponent implements OnInit {
  pack: Pack = {id: null, name: "", banner: "", songs: null};
  uploadedFile: File;

  constructor(
    public dataService: DataService,
    private router: Router) { }

  ngOnInit() {
  }

  fileChange(element) {
    this.uploadedFile = element.files[0];
  }

  upload() {
    let formData = new FormData();
    formData.append("upload", this.uploadedFile, this.uploadedFile.name);
    this.dataService.uploadFile(formData)
      .subscribe(banner => this.createPack(banner));
  }

  createPack(banner: string) {
    this.pack.banner = banner;
    this.dataService.createPack(this.pack)
      .subscribe(() => this.router.navigate(['/pack-list']),
                 error => console.log(error));
  }
}
