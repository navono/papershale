import { AnyAction } from 'redux';

export default function appReducer(state: any, action: AnyAction): any {
  return 'test';
  // switch (state.type) {
  //   default:
  //     return 'test';
  // }
}