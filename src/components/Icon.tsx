import type { Component } from "solid-js"; 
import { Show } from "solid-js";

interface IProps {
  open: (win: string) => void
  img?: string
  title: string
  isTaskbar: boolean
  toggleMinimize?: (i: number) => void
}

const Icon: Component<IProps> = (props: IProps) => {
   return (
    <div onClick={() => props.open(props.title)}>
      <img src={props.img} />
      <Show when={!props.isTaskbar}>
	<p>{props.title}</p>
      </Show>
    </div>
   )
}

export default Icon
