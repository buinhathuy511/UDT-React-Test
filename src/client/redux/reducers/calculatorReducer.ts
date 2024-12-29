const initialState = {};

interface IAction {
  type: string;
  payload?: any;
}

interface IState {
  display?: string;
}

const rootReducer = (state: IState = initialState, action: IAction): IState => {
  /* Ví dụ của 1 action
    {
        type: "Show display",
        payload: "Hello World"
    }
*/
  switch (action.type) {
    case "Show display":
      return {};
    default:
      return state;
  }
};

export default rootReducer;
