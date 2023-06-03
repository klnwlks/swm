import { Component, createSignal, For } from 'solid-js';
import { useWM } from './WindowContext';
import type { IWindow } from './types';
import { EState } from './types';

const App: Component = () => {
  const [win, {open}] = useWM()
  const [idCount, setID] = createSignal(0)

  // a dictionary that corresponds to an App, to avoid running if chains
  // if we call open()
  let apps: any = {
    // string: <Component props={win()[i].prop} id={i} 
    // i is IMPORTANT TO INITIALIZE
  }

  // this will wrap the open function to keep track of the "i" variable, as a 
  // crude workaround
  const callOpen = (w: IWindow | {title: string, icon: string, size: {x: number, y: number}}) => {
    setID(idCount() + 1)
    w = { ...w, id: idCount(), position: {x:0, y: 0}, state: EState.FOCUSED, isMaximized: false}
    open(w)
  }

  const setFocus = () => {

  }

  const hide = () => {

  }

  return (
    <div>
      <div class='desktop'> 
	<div class='icons'>
	  {/* add components later, dont use For */}
	</div>

	<For each={win()}>{(w) => 
	  apps[w.title]
	}</For>
      </div>

      <div class='taskbar'>
	{/* add icon components*/}
      </div>
    </div>
  );
};

export default App
