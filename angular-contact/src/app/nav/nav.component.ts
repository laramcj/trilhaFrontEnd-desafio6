import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
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

  ngOnInit(): void {
  }

}
