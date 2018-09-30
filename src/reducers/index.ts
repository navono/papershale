import { combineReducers } from 'redux';
import appReducer from '../components/App/reducers';
import toolsReducer from '../components/Tools/reducers';

export default function createRootReducer(injectedReducers?: any) {
  return combineReducers({
    app: appReducer,
    tools: toolsReducer,
    ...injectedReducers,
  });
}
