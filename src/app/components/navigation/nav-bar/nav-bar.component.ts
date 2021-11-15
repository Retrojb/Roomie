import { LyTheme2 } from '@alyle/ui';
import { Component, OnInit } from '@angular/core';

const style = ({
  grow: {
    flexGrow: 1
  }
});

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  classes = this._theme.addStyleSheet(style);
  menuItems = {
    "home": "home",
    "rooms": "rooms",
    "chores": "chores"
  }
  constructor(private _theme: LyTheme2) { }

  ngOnInit(): void {
  }

}
