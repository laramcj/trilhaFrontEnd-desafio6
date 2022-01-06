import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'angular-contact';
  responsivity = true;
  toggle = false;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    event.target.innerWidth;
    if (window.screen.width <= 960) { 
      this.responsivity = false;
    } else{
      this.responsivity = true;
    }
  }

  ngOnInit(): void {
    if (window.innerWidth <= 1060) {
      this.responsivity = true
    }

  }
}
