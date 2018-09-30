import { AnyAction } from 'redux';

const initial = {
  paper: null,
};

export default function appReducer(state: any = initial, action: AnyAction): any {
  switch (action.type) {
    case 'UPDATE_PAPER_SCOPE': {
      // const b = new Blob([action.data]);
      // console.log(b.size);

      return {
        ...state,
        paper: action.data,
      };
    }
    default:
      return state;
  }
}