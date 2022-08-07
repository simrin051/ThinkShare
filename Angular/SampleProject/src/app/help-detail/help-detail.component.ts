import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-help-detail',
  templateUrl: './help-detail.component.html',
  styleUrls: ['./help-detail.component.css']
})
export class HelpDetailComponent implements OnInit {

  constructor(private router: Router) {
    console.log("inside help detail component");
   }

  ngOnInit(): void {
  }

  callHelpDetail(): void {
    console.log("inside call help detail");
    this.router.navigate(['/cases']);
  }

}
