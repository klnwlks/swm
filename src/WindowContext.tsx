import { createContext, useContext, createSignal } from "solid-js"

import type { IWindow } from "./types"
import { EState } from "./types" 

const WindowContext = createContext()

// this context provider will handle window manipulation and such. while the App.tsx (Desktop)
// will be in charge of the rendering of the windows and etc.
export const WindowProvider = (props: any) => {
  const [windows, setWindows] = createSignal<IWindow[]>([]), 
    windowList = [windows, 
    {
      open(w: IWindow) {
	setWindows(wl => [...wl, w])
	console.log(windows())
      },
      minimize(id: number) {
	let temp = [...windows()]
	if (temp[id].state = EState.MINIMIZED) temp[id].state = EState.FOCUSED
	else temp[id].state = EState.MINIMIZED 
	setWindows(temp)
      },
      toggleMaximize(id: number) {
	let temp = [...windows()].map((win) => ({
	  ...win,  isMaximized: win.id == id	
	}))
	setWindows(temp)
      },
      // these two functions are likely expensive in terms of cpu usage, possibly rewrite later using
      // the memo and derived signals in solid.js
      resize(id: number, size: {w: number, h:number }) {
	let temp = [...windows()]
	temp[id].size = size
	setWindows(temp)
      },
      move(id: number, position: {x: number, y:number }) {
	let temp = [...windows()]
	temp[id].position = position
	setWindows(temp)
      },
      close(id: number) {
	setWindows(windows().filter((wl: any) => {
	  return wl.id !== id
	}))
      }
    }]
  return (
    <WindowContext.Provider value={windowList}>
      {props.children}
    </WindowContext.Provider>
    )
}

export const useWM = () => useContext(WindowContext)
