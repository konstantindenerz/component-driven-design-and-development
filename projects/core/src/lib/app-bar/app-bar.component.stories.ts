import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {AppBarComponent} from './app-bar.component';
import {AppBarModule} from './app-bar.module';

export default {
  title: 'Core / AppBar',
  component: AppBarComponent,
  decorators: [
    moduleMetadata({imports: [AppBarModule]})
  ],
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ['primary', 'accent', 'warn', 'default']
      }
    },
  }
} as Meta;

const Template: Story<AppBarComponent> = (props: AppBarComponent) => ({
  component: AppBarComponent,
  props,
});

export const Default = Template.bind({});
Default.args = {
  title: 'My App',
  showSearch: true,
  color: 'primary'
};
