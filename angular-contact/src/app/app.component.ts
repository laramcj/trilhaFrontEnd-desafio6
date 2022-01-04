import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'angular-contact';
  mobile = true;
  toggle = false;
  

  @HostListener('window:resize', ['$event'])
  onresize(event) {
    event.target.innerWidth;
    if (window.screen.width <= 960) { 
      this.mobile = true;
    } else{
      this.mobile = false;
    }
  }

  isActive = false;

  enableMenu(){
    if (!this.toggle){
      this.toggle = true;
      this.isActive = true;

        } else{
          this.toggle = false;
          
        }
  }

  ngOnInit() {
    
  }
}
