import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NavigationService } from '../services/navigation.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit, OnDestroy {

  constructor( public navService: NavigationService) { }
  
  projectTitle = "Projects Portal";
  title = 'frontend';
  isExpanded = false;
  subscription: Subscription | undefined;
  
  isShowing = false;
  
  ngOnInit(): void {
    
  }

  toggleSideNav(){
    this.navService.toggleSideNavExpansion();
  }

  ngOnDestroy(): void {
    if( this.subscription !== undefined){
      this.subscription.unsubscribe();
    }
  }
}
