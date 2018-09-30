import { combineReducers } from 'redux';
import appReducer from '../components/App/reducers';

export default function createRootReducer(injectedReducers?: any) {
  return combineReducers({
    app: appReducer,
    ...injectedReducers,
  });
}
