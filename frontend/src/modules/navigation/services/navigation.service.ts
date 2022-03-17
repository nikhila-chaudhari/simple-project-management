import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NavigationService {

  private _sideNavExpanded = new BehaviorSubject( false);

  constructor() { }

  sideNavExpanded() : Observable<boolean>{
    return this._sideNavExpanded;
  }

  toggleSideNavExpansion( expanded?: boolean){
    if( expanded != undefined){
      this._sideNavExpanded.next( expanded);
    }
    else{
      this._sideNavExpanded.next( !this._sideNavExpanded.value);
    }
  }
}
