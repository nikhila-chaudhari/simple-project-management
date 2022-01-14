import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NavigationService } from '../services/navigation.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit, OnDestroy {

  isExpanded: boolean = false;
  isShowing: boolean = false;
  subscription: Subscription = new Subscription();

  constructor( public navService: NavigationService) { }
  
  ngOnInit(): void {
    this.subscription = this.navService.sideNavExpanded().subscribe( expanded => {
      this.isExpanded = expanded;
    });
  } 

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }


  ngOnDestroy(): void {
    if( this.subscription != undefined){
      this.subscription.unsubscribe();
    }
  } 
}
