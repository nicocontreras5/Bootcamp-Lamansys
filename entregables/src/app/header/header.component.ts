import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  theme: string ="light_mode";
  @Output() themeChange= new EventEmitter<String>;
  @Input() user!: String; 
  constructor() { }

  ngOnInit(): void {
  }


  toggleThemeHeadera(){
    this.theme = this.theme == "light_mode" ? "dark_mode" : "light_mode";
    this.themeChange.emit(this.theme);
  }

  toggleFullScreen(){
    
    document.fullscreenElement ?  document.exitFullscreen() : document.documentElement.requestFullscreen();
    
  }

}
