import { flashAlert } from "../redux/flashRedux";

export const flash = (dispatch, message, type = "success") => {
  dispatch(
    flashAlert({
      message: message,
      type: type,
    })
  );
};
