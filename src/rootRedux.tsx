import { createStore } from 'redux'
import { combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import animations, { RotationState } from './common/Animations/redux';
import logo, { LogoState } from './common/Logo/redux';

const rootReducer = combineReducers({
  animations,
  logo,
});

interface RootState {
  animations?: RotationState
  logo?: LogoState
};

export default function configureStore(preLoadedState: RootState = {}) {
  return createStore(
    rootReducer,
    preLoadedState,
    devToolsEnhancer({ name: 'rockygray.com' }),
  );
}
