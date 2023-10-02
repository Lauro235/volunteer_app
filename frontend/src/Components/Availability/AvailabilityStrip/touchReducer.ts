export enum ReducerActions {
  Touch = "TOUCH",
  Cancel = "CANCEL",
  Drag = "DRAG",
  Release = "RELEASE"
}

type TState = 
| {
  animationStart: false,
  interaction: false
}
| {
  animationStart: false,
  interaction: 'touched'
}
| {
  animationStart: true,
  interaction: 'dragging'
}
| {
  animationStart: false,
  interaction: 'released'
}

interface IAction {
  type: ReducerActions
}

export const touchReducer = (state: TState, action: IAction): TState => {
  switch(action.type) {
    case ReducerActions.Touch : {
      return {
        animationStart: false,
        interaction: 'touched'
      }
      break;
    }
    case ReducerActions.Cancel : {
      return {
        animationStart: false,
        interaction: 'touched'
      }
      break;
    }
    case ReducerActions.Drag : {
      return {
        animationStart: true,
        interaction: 'dragging'
      }
      break;
    }
    case ReducerActions.Release : {
      return {
        animationStart: false,
        interaction: false
      }
      break;
    }
    default : 
    return {...state}
  }
}