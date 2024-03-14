import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  @Output()
  public showCreateComponent = new EventEmitter<boolean>(false);


  toggleCreateComponent(): void {
    this.showCreateComponent.emit(true);
  }


}
