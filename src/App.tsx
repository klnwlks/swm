import { Component, createSignal, For } from 'solid-js';
import { useWM } from './WindowContext';
import { EState } from './types';

import Icon from './components/Icon';
import BlankApp from './components/apps/example';

const App: Component = () => {
  const [win, {open}] = useWM()

  // register app configurations
  const appConfig: any = {
    blank: {title: "blank", name: "Blank App", position: {x: 0, y: 0}, size: {h: 200, w: 400},
			     id: 0, state: EState.FOCUSED, isMaximized: false}
  }

  // a dictionary that corresponds to an App, to avoid running if chains
  // if we call open()
  //
  // register your apps here
  let apps: any = {
    // string: <Component props={win()[i].prop} id={i}} />
    blank: <BlankApp winfo={appConfig.blank}/>
  }

  // this will wrap the open function to keep track of the "i" variable, as a 
  // crude workaround
  const callOpen = (w: string) => {
    appConfig[w] = {...appConfig[w], id: win().length}
    open(appConfig[w])
    console.log(`open app called, current n of apps open: ${win().length}`)
  }

  return (
    <div>
      <div class='desktop h-screen w-screen'> 
	<div class='icons h-[90%]'>
	   <Icon open={callOpen} title='blank' isTaskbar={false}/> 
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
