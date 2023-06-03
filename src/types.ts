export enum EState {
  MINIMIZED,
  FOCUSED,
  UNFOCUSED
}

export interface IWindow {
  title?: string
  name: string
  icon?: string
  position: {x: number, y:number}
  size: {w: number, h: number}
  id: number
  state: EState
  isMaximized: boolean 
}
