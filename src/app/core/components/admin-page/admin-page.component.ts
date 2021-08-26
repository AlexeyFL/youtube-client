import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent {
  titleInput: string;

  descriptionInput: string;

  imageInput: string;

  linkVideoInput: string;

  constructor() {
    this.titleInput = '';
    this.descriptionInput = '';
    this.imageInput = '';
    this.linkVideoInput = '';
  }

  addItem() {
    /* const title = this.titleInput;
    const description = this.descriptionInput;
    const image = this.imageInput;
    const linkVideo = this.linkVideoInput; */

    const newItem = {
      title: this.titleInput,
      description: this.descriptionInput,
      image: this.imageInput,
      linkVideo: this.linkVideoInput,
    };
    console.log(newItem);

    this.titleInput = '';
    this.descriptionInput = '';
    this.imageInput = '';
    this.linkVideoInput = '';
  }
}
