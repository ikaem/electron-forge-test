import { Menu } from 'electron';

export const buttonContextMenu = Menu.buildFromTemplate([
  {
    label: 'Test on button',
    click: () => console.log('test'),
  },
]);
