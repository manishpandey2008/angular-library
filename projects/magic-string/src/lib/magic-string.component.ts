import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'sm-magic-string',
  template: `
     <div>
      <input type="text"  placeholder="Enter search text" (keydown)="markText($event.target)">
      <span>Total Count : {{count}}</span>
    </div>
    <div #content [hidden]="true">
      <ng-content></ng-content>
    </div>
    <div [innerHTML]="controlContent"></div>
  `,
  styles: [
    `.mark {
      background:yellow;
    }`
  ],
  encapsulation: ViewEncapsulation.None
})
export class MagicStringComponent implements OnInit {
  @ViewChild('content', { static: true }) content!: ElementRef;

  originalContent: string = "";
  controlContent: string = "";
  count = 0;
  constructor() { }

  ngOnInit(): void {
    console.log(this.content)
    this.controlContent = this.originalContent = this.content?.nativeElement.textContent;
  }

  markText(text: any) {
    this.controlContent = this.originalContent;
    this.controlContent = this.originalContent.replace(
      new RegExp(text.value, 'g'),
      `<span class="mark">${text.value}</span>`
    )
    this.count = this.originalContent.match(new RegExp(text.value, 'g'))?.length || 0
  }

}
