import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.scss']
})
export class UploadFilesComponent implements OnInit {
  
  @Output() getFiles = new EventEmitter();
  
  public files = [];
  
  constructor() { }
  
  ngOnInit(): void {
  }
  
  openFiles() {
    document.getElementById("upfile").click();
  }
  
  async loadFile(files) {
    this.files = [];
    if (files) {
      files = Array.from(files);
      files.forEach((file, i) => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (event: ProgressEvent) => {
          this.files.push(event.target['result']);
          if (i === files.length - 1) {
            this.getFiles.emit(this.files);
          }
        }
      });
    }
  }
  
  
}
