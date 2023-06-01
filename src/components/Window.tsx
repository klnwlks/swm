import type { Component } from 'solid-js' 
import { createSignal } from 'solid-js'
import { createStore } from 'solid-js/store'

const Window: Component = (props: any) => {
  const [isFocused, setFocus] = createSignal(true)
  const [state, setState] = createStore()

  return (
    <div class='app'>
      <div class='titlebar'>
	<p> {props.title} </p>

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
