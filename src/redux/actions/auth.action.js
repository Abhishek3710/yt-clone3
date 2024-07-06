import auth from "../../firebase";
import firebase from "firebase/compat/app"; // Use compatibility version
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOAD_PROFILE,
  LOGIN_FAIL,
  LOG_OUT,
} from "../reducers/actionType";
export const login = () => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    const provider = new firebase.auth.GoogleAuthProvider();
    const res = await auth.signInWithPopup(provider);
    // console.log(res);

    const accessToken = res.credential.accessToken;
    const profile = {
      name: res.additionalUserInfo.profile.name,
      photoURL: res.additionalUserInfo.profile.picture,
    };

    sessionStorage.setItem("ytc-access-token", accessToken);
    sessionStorage.setItem("ytc-user", JSON.stringify(profile));

    dispatch({ type: LOGIN_SUCCESS, payload: accessToken });
    dispatch({ type: LOAD_PROFILE, payload: profile });
  } catch (error) {
    console.log(error.message);
    dispatch({ type: LOGIN_FAIL, payload: error.message });
  }
};

export const log_out = () => async (dispatch) => {
  try {
    console.log("Attempting to sign out...");
    await auth.signOut();
    console.log("Signed out successfully");
    dispatch({ type: LOG_OUT });
    console.log("Dispatched LOG_OUT action");
    sessionStorage.removeItem("ytc-access-token");
    sessionStorage.removeItem("ytc-user");
    console.log("Cleared session storage");
  } catch (error) {
    console.error("Error during sign out: ", error);
  }
};
