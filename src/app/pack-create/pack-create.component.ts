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
  pack: Pack = {id: null, name: "", count: null};
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
      .subscribe(() => this.createPack());
  }

  createPack() {
    this.dataService.createPack(this.pack)
      .subscribe(() => this.router.navigate(['/pack-list']),
                 error => console.log(error));
    this.pack = {id: null, name: "", count: null};
  }
}
