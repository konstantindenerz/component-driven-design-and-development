import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {SearchPageComponent} from './search-page.component';
import {SearchPageModule} from './search-page.module';
import {SearchService} from './search.service';
import {SearchServiceMock} from './search.service.mock';

export default {
  title: 'Use Case / Search Page',
  component: SearchPageComponent,
  decorators: [
    moduleMetadata({
      imports: [SearchPageModule],
      providers: [
        {provide: SearchService, useClass: SearchServiceMock}
      ]
    })
  ],
} as Meta;

const Template: Story<SearchPageComponent> = (props: SearchPageComponent) => ({
  component: SearchPageComponent,
  props,
});

export const Default = Template.bind({});
Default.args = {
};
