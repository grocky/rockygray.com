const  LOGO_INTERACTION = 'logo/LOGO_INTERACTION';

interface LetterGroups {
  index: number
  states: number[]
  sections: string[][]
}

export interface LogoState {
  letterGroups: LetterGroups
  highlightedSections: string[]
}

const initialState: LogoState = {
  letterGroups: {
    index: 0,
    states: [1, 0, 1, 2],
    sections: [
      ['middle', 'bottom'], // r
      [], // g
      ['top'] // j
    ]
  },
  highlightedSections: [],
};

interface Action {
  type: string
  payload?: any
}

export default function reducer(state: LogoState = initialState, action: Action): LogoState {
  switch (action.type) {
    case LOGO_INTERACTION:

      const { index, states, sections } = state.letterGroups;
      const nextIndex = index >= states.length -1
        ? 0
        : index + 1;

      return {
        ...state,
        letterGroups: {
          ...state.letterGroups,
          index: nextIndex,
        },
        highlightedSections: sections[states[nextIndex]]
      };
    default:
      return state;
  }
}

type LogoActionTypes = Action;

export function updateSections(): LogoActionTypes {
  return {
    type: LOGO_INTERACTION,
  }
}
