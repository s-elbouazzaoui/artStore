import { Component, inject, Renderer2 } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatToolbar, MatToolbarRow } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';
import { NightmodeComponent } from "../nightmode/nightmode.component";

@Component({
  selector: 'app-navbar',
  imports: [MatToolbar, MatToolbarRow, RouterModule, FlexLayoutModule, MatButtonModule, NightmodeComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {



}
