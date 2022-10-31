import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {


  @Input() item: any | undefined;
  @Output() oncancel = new EventEmitter()
  @Output() ondelete = new EventEmitter()
  constructor(private rout: Router) { }

  ngOnInit(): void {
  }

  delete() {
    this.ondelete.emit(this.item);
    // this.rout.navigateByUrl('login')
  }

  cancel() {
    this.oncancel.emit();
  }

}
