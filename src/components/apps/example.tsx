// example app for testing
import type {Component} from 'solid-js'
import { IWindow } from '../../types'

import Window from '../Window'

interface IProps {
  winfo: IWindow
}

const BlankApp: Component<IProps> = (props: IProps) => {
  return (
    <Window winfo={props.winfo}>
	<div>
	  <h1> This is a blank app, check it out. </h1>
	</div>
    </Window>
  );
}

export default BlankApp
