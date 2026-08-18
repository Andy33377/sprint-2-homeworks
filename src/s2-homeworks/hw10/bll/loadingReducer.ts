const initState = {
  isLoading: false,
};

type LoadingActionType = {
  type: "CHANGE_LOADING";
  isLoading: boolean;
};

type InitialStateType = typeof initState;

export const loadingReducer = (
  state: InitialStateType = initState,
  action: LoadingActionType,
): InitialStateType => {
  switch (action.type) {
    case "CHANGE_LOADING":
      return {
        ...state,
        isLoading: action.isLoading,
      };

    default:
      return state;
  }
};

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
  type: "CHANGE_LOADING",
  isLoading,
});
