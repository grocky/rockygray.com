const  ANIMATION_STARTED = (key: string): string =>  `animations/${key}/ANIMATION_STARTED`;
const  ANIMATION_STOPPED = (key: string): string => `animations/${key}/ANIMATION_STOPPED`;

export interface RotationState {
  [key: string]: boolean
}

const initialState: RotationState = {};

export default function reducer(state = initialState, action: Action) {
  const { key } = action.payload;
  switch (action.type) {
    case ANIMATION_STARTED(key):
      if (state[key]) {
        return state;
      }

      return {
        ...state,
        [key]: true,
      };
    case ANIMATION_STOPPED(key):
      return {
        ...state,
        [key]: false,
      };
    default:
      return state;
  }
}

interface RotationPayload {
  key: string
}

interface Action {
  type: string
  payload: RotationPayload
}

export type RotationActionTypes = Action;

export function startRotation(key: string): RotationActionTypes {
  return {
    type: ANIMATION_STARTED(key),
    payload: {
      key,
    }
  }
}

export function rotationStopped(key: string): RotationActionTypes {
  return {
    type: ANIMATION_STOPPED(key),
    payload: {
      key,
    }
  }
}
