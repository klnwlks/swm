import type { Component } from 'solid-js' 
import { createSignal } from 'solid-js'
import { createStore } from 'solid-js/store'
import { IWindow } from '../types' 

interface IProps {
  winfo: IWindow 
  minimize: (i: number) => void
  maximize: (i: number) => void
  close: (i: number) => void
}

const Window: Component = (props: any) => {
  const [isFocused, setFocus] = createSignal(true)
  const [state, setState] = createStore()

  return (
    <div class='app'>
      <div class='titlebar'>
	<p> {props.name} </p>

	<div>
	  <button />
	  <button />
	  <button />
	</div>
      </div>
      <div class='content'>
	{props.children}
      </div>
    </div>
  )
}

export default Window
