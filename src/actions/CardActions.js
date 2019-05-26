export const types = {
  LOGO_INTERACTION: 'LOGO_INTERACTION',
  LOGO_CREATED: 'LOGO_CREATED',
  SPIN_STARTED: 'SPIN_STARTED',
  SPIN_STOPPED: 'SPIN_STOPPED'
};

export function updateSections() {
  return {
    type: types.LOGO_INTERACTION,
  }
}

export function createLogo(logoRef) {
  return {
    type: types.LOGO_CREATED,
    payload: { logoRef }
  }
}

export function startRotation() {
  return {
    type: types.SPIN_STARTED,
    payload: {
      isSpinning: true
    }
  }
}

export function rotationStopped() {
  return {
    type: types.SPIN_STOPPED,
    payload: {
      isSpinning: false
    }
  }
}