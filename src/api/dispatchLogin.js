import Api from "../Api";
import { flash } from "../helpers/flash";
import { loginFailure, loginStart, loginSuccess } from "../redux/userRedux";

export default async function dispatchLogin(dispatch, user) {
  dispatch(loginStart());
  try {
    const api = new Api();

    const { data } = await api.userLogin(user);
    //Dispatch LoginSuccess
    dispatch(loginSuccess(data));
    //Flash Message
    flash(dispatch, "Successfully login!");

    //Return Message
    return { success: true, data: "data" };
  } catch (error) {
    //Dispatch LoginFailure
    dispatch(loginFailure("Wrong Email or Password!"));
    //Flash Failed Message
    flash(dispatch, "Login Failed!", "danger");
    //Return
    return { success: false, data: "Wrong Email or Password!" };
  }
}
