import { Menu } from 'electron';

export const contextMenu = Menu.buildFromTemplate([
  {
    label: 'Test',
    click: () => console.log('test'),
  },
]);
