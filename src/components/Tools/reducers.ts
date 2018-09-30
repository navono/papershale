import { AnyAction } from 'redux';

interface ITool {
  name?: string;
  id?: string;
}

interface ITools {
  tools: ITool[];
}
const initial:ITools = {
  tools: [],
};

export default function toolsReducer(state: ITools = initial, action: AnyAction): any {
  switch (action.type) {
    case 'ADD_TOOL': {
      // const b = new Blob([action.data]);
      // console.log(b.size);

      return {
        ...state,
        tools: state.tools.push(action.data),
      };
    }
    default:
      return state;
  }
}