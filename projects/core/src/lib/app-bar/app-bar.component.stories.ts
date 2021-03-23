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
  },
  parameters: {
    design: {
      review: 'https://xd.adobe.com/view/6a1a71f6-b70c-4e75-b977-5c1eb8bf4a97-3f49/'
    }
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
