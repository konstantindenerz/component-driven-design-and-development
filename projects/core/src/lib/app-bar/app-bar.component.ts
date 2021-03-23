import {Component, Input} from '@angular/core';

/**
 * The top app bar.
 */
@Component({
  selector: 'app-bar',
  templateUrl: 'app-bar.component.html'
})

export class AppBarComponent {
  /**
   * Provide the app title
   */
  @Input() title: string;

  /**
   * Enable or disable the search field
   */
  @Input() showSearch: boolean;

  @Input() color: 'primary' | 'accent' | 'warn' | 'default' = 'default';
}
