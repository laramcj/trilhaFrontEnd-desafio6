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
      console.log('atingi o tamanho')
    } else{
      this.responsivity = true;
    }
  }

  // enableMenu(){
  //   console.log('toggle tá rolando')
  //   if (!this.toggle){
  //     this.toggle = true;
  //       } else{
  //         this.toggle = false;
  //       }
  // }

  ngOnInit() {
    
  }
}
