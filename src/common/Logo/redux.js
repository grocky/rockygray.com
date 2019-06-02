const  LOGO_INTERACTION = 'logo/LOGO_INTERACTION';
const  LOGO_CREATED = 'logo/LOGO_CREATED';
const  SPIN_STARTED =  'logo/SPIN_STARTED';
const  SPIN_STOPPED = 'logo/SPIN_STOPPED';

const initialState = {
  letterGroups: {
    index: 0,
    states: [1, 0, 1, 2],
    sections: [
      ['middle', 'bottom'], // r
      [], // g
      ['top'] // j
    ]
  },
  refs: []
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOGO_INTERACTION:
      const {index, states, sections} = state.letterGroups;
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
    case LOGO_CREATED:
      return {
        ...state,
        refs: state.refs.concat(action.payload.logoRef)
      };
    case SPIN_STARTED:
      return {
        ...state,
        isSpinning: action.payload.isSpinning
      };
    case SPIN_STOPPED:
      return {
        ...state,
        isSpinning: action.payload.isSpinning
      };
    default:
      return state;
  }
}

export function updateSections() {
  return {
    type: LOGO_INTERACTION,
  }
}

export function createLogo(logoRef) {
  return {
    type: LOGO_CREATED,
    payload: { logoRef }
  }
}

export function startRotation() {
  return {
    type: SPIN_STARTED,
    payload: {
      isSpinning: true
    }
  }
}

export function rotationStopped() {
  return {
    type: SPIN_STOPPED,
    payload: {
      isSpinning: false
    }
  }
}