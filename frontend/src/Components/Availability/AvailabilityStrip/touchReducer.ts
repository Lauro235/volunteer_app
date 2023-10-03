export enum ReducerActions {
  Touch = "TOUCH",
  Cancel = "CANCEL",
  Drag = "DRAG",
  Release = "RELEASE"
}

type TState = 
| {
  animationStart: false,
  interaction: false,
  e: React.Touch | undefined
}
| {
  animationStart: false,
  interaction: 'touched',
  e: React.Touch | undefined
}
| {
  animationStart: true,
  interaction: 'dragging',
  e: React.Touch | undefined
}
| {
  animationStart: true,
  interaction: 'cancelled',
  e: React.Touch | undefined
}
| {
  animationStart: false,
  interaction: 'released',
  e: React.TouchEvent | undefined
}

interface IAction {
  type: ReducerActions;
  payload?: React.TouchEvent;
}

export const touchReducer = (state: TState, action: IAction): TState => {
  console.log(action.payload);
  switch(action.type) {
    case ReducerActions.Touch : {
      return {
        e: action.payload?.touches[0],
        animationStart: false,
        interaction: 'touched'
      }
      break;
    }
    case ReducerActions.Cancel : {
      return {
        e: action.payload?.touches[0],
        animationStart: false,
        interaction: 'touched'
      }
      break;
    }
    case ReducerActions.Drag : {
      return {
        e: action.payload?.touches[0],
        animationStart: true,
        interaction: 'dragging'
      }
      break;
    }
    case ReducerActions.Release : {
      return {
        e: undefined,
        animationStart: false,
        interaction: false
      }
      break;
    }
    default : 
    return {...state}
  }
}