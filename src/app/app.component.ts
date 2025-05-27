import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./component/header/header.component";
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
      // changeDetection: ChangeDetectionStrategy.OnPush,

})
export class AppComponent {
  title = 'movie_discovery';
 

}
