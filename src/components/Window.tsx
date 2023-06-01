import type { Component } from 'solid-js' 
import { createSignal } from 'solid-js'

const Window: Component = (props: any) => {
  const [isFocused, setFocus] = createSignal(true)

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
