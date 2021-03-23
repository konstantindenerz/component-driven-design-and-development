import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {MatTableModule} from '@angular/material/table';
import {CommonModule} from '@angular/common';

export default {
  title: 'Core / Table',
  decorators: [
    moduleMetadata({imports: [MatTableModule, CommonModule]})
  ],
} as Meta;

const Template: Story = (props) => ({
  template: `
  <table mat-table [dataSource]="items" class="mat-elevation-z8" style="width: 100%">

  <!--- Note that these columns can be defined in any order.
        The actual rendered columns are set as a property on the row definition" -->

  <!-- Position Column -->
  <ng-container [matColumnDef]="column" *ngFor="let column of displayedColumns">
    <th mat-header-cell *matHeaderCellDef> {{column}} </th>
    <td mat-cell *matCellDef="let element"> {{element[column]}} </td>
  </ng-container>

  <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
  <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
</table>

`,
  props,
});

export const Default = Template.bind({});
Default.args = {
  items: [{position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ],
  displayedColumns: ['position', 'name', 'weight', 'symbol'],

};
