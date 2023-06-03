import type { ParentComponent } from 'solid-js' 
import { createSignal, createEffect } from 'solid-js'
import { IWindow } from '../types' 
import { useWM } from '../WindowContext'

interface IProps {
  winfo: IWindow 
}

const Window: ParentComponent<IProps> = (props: IProps) => {
  const [_, {minimize, maximize, close}] = useWM()
  let wDimen: HTMLDivElement

  createEffect(() => {
    wDimen.style.width = props.winfo.size.w.toString() + 'px'
    wDimen.style.height = props.winfo.size.h.toString() + 'px'
    wDimen.style.left = props.winfo.position.x.toString() + 'px'
    wDimen.style.top = props.winfo.position.y.toString() + 'px'
  })

  return (
    <div ref={wDimen!} class='app'>
      <div class='titlebar'>
	<p> {props.winfo.name} </p>

	<div class='buttons'>
	  <button onClick={() => minimize(props.winfo.id)} />
	  <button onClick={() => maximize(props.winfo.id)} />
	  <button onClick={() => close(props.winfo.id)} />
	</div>
      </div>
      
      <div class='content'>
	{props.children}
      </div>
    </div>
  )
}

export default Window
