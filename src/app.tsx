// import { BrowserWindow, remote } from 'electron';
// TODO dont use this
// import

import electron, { ipcRenderer } from 'electron'; /*  */
import { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
// import CodeMirror from 'react-codemirror';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import {
  getCurrentAppPath,
  loadScratchpad,
  showButtonContextMenu,
  showMessageBox,
  showOpenDialog,
  updateScratchpad,
} from './renderer';

const App: React.FC = () => {
  const [currentAppPath, setCurrentAppPath] = useState('');

  const onButtonClick = () => {
    // open window
    // window.open('');
    // const newWin = window.open('');
    // console.log('new win', newWin);
    // const win = new BrowserWindow();

    // open dialog

    const dialogConfig = {
      title: 'Select a file',
      buttonLabel: 'This one will do',
      // this is just waht we will allow to do to the dialog
      properties: ['openFile'],
    };

    // electron.showOpenDialog('showOpenDialog', dialogConfig);

    showOpenDialog();
  };

  const onOpenMessageBox = () => {
    showMessageBox();
  };

  const onButtonContextMenu = () => {
    // showMessageBox();

    showButtonContextMenu();
    //
    // ipcRenderer.send('show-button-context-menu');
  };

  const handleGetCurrentPath = async () => {
    const res = await getCurrentAppPath();

    setCurrentAppPath(res);
  };

  return (
    <div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/products'>Products</Link>
      </nav>

      <hr />
      <button onClick={onButtonClick}>Open new window</button>
      <button onClick={onOpenMessageBox}>Open message box</button>
      <button onContextMenu={onButtonContextMenu}>Context menu</button>

      <hr />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
      </Routes>

      <hr />
      <p>current path is: {currentAppPath ? currentAppPath : 'unknown :('} </p>
      <button onClick={handleGetCurrentPath}>Get current path</button>
    </div>
  );
};

export default App;

function Home() {
  return (
    <div>
      <ScratchPad />
    </div>
  );
}

function About() {
  return <div>About</div>;
}

function Products() {
  return <div>Products</div>;
}

function ScratchPad() {
  const [content, setContent] = useState('');

  console.log('content state', content);

  const options = {
    theme: 'material',
  };

  const handleChangeScratchpad = async (newValue: string) => {
    // console.log(newValue);

    console.log({ newValue });

    updateScratchpad(newValue);
  };

  const handlePrefillScratchpad = async () => {
    // console.log(newValue);

    const content = await loadScratchpad();
    console.log({ content });
    setContent(content);
  };

  useEffect(() => {
    // test();
    // const test = async () => {
    //   console.log('api');
    // };
    // test();
    // (async () => await test())();
    //

    handlePrefillScratchpad();
  }, []);

  setTimeout(() => {
    // setContent('burek s meson');
  }, 1000);

  return (
    <div>
      <CodeMirror
        // value='Hello from Electron CodeMirror'
        value={content}
        onChange={(editor, data, value) => handleChangeScratchpad(value)}
        options={options}
      />

      {content}

      <button onClick={() => setContent('what')}>Update me</button>
    </div>
  );
}
