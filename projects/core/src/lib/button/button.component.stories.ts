import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {MatButtonModule} from '@angular/material/button';
import {action} from '@storybook/addon-actions';

export default {
  title: 'Core / Button',
  decorators: [
    moduleMetadata({imports: [MatButtonModule]})
  ],
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ['primary', 'accent', 'warn', 'default']
      }
    },
    type: {
      control: {
        type: 'select',
        options: ['default', 'raised', 'stroked', 'flat']
      }
    }
  }
} as Meta;

const Template: Story = (props) => ({
  template: `
<ng-container [ngSwitch]="type">
    <button *ngSwitchCase="'default'" mat-button [color]="color" [disabled]="disabled" (click)="handleClick($event)">{{label}}</button>
    <button *ngSwitchCase="'raised'" mat-raised-button [color]="color" [disabled]="disabled" (click)="handleClick($event)">{{label}}</button>
    <button *ngSwitchCase="'stroked'" mat-stroked-button [color]="color" [disabled]="disabled" (click)="handleClick($event)">{{label}}</button>
    <button *ngSwitchCase="'flat'" mat-flat-button [color]="color" [disabled]="disabled" (click)="handleClick($event)">{{label}}</button>
</ng-container>
`,
  props,
});

export const Default = Template.bind({});
Default.args = {
  label: 'Button',
  color: 'primary',
  disabled: false,
  type: 'default',
  handleClick: action('click')
};

export const Stroked = Template.bind({});
Stroked.args = {
  label: 'Button',
  color: 'primary',
  disabled: false,
  type: 'stroked',
  handleClick: action('click')
};


export const Raised = Template.bind({});
Raised.args = {
  label: 'Button',
  color: 'primary',
  disabled: false,
  type: 'raised',
  handleClick: action('click')
};

