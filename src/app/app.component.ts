import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationEnd } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public activated: {
    home: boolean;
    p1c1: boolean;
    p1c2: boolean;
    p2c1: boolean;
    p2c2: boolean;
};

private router: Router;

// I initialize the app component.
constructor( router: Router ) {

    this.router = router;
    this.activated = {
        home: false,
        p1c1: false,
        p1c2: false,
        p2c1: false,
        p2c2: false
    };

    // Listen for routing events so we can update the activated route indicator
    // as the user navigates around the application.
    this.router.events.subscribe(
        ( event: NavigationEnd ) : void => {

            if ( event instanceof NavigationEnd ) {

                this.activated.home = this.router.isActive( "/", true );
                this.activated.p1c1 = this.router.isActive( "/cliente", false );
                this.activated.p1c2 = this.router.isActive( "/parent/p1/child/p1-c2", true );
                this.activated.p2c1 = this.router.isActive( "/parent/p2/child/p2-c1", true );
                this.activated.p2c2 = this.router.isActive( "/parent/p2/child/p2-c2", true );

            }

        }
    );

}

}
