import request from "../../api";
import {
  CHANNEL_DETAILS_FAIL,
  CHANNEL_DETAILS_REQUEST,
  CHANNEL_DETAILS_SUCCESS,
  SET_SUBSCRIPTION_STATUS,
} from "../actionType";

export const getChannelDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: CHANNEL_DETAILS_REQUEST });

    const { data } = await request("/channels", {
      params: {
        part: "snippet,statistics,contentDetails",
        id,
      },
    });

    dispatch({ type: CHANNEL_DETAILS_SUCCESS, payload: data.items[0] });
  } catch (error) {
    console.log(error.response.data);
    dispatch({ type: CHANNEL_DETAILS_FAIL, payload: error.response.data });
  }
};

export const checkSubscriptionStatus = (id) => async (dispatch, getState) => {
  try {
    const token = getState().auth.accessToken;
    if (!token) throw new Error("No access token available");

    const { data } = await request("/subscriptions", {
      params: {
        part: "snippet",
        forChannelId: id,
        mine: true,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch({
      type: SET_SUBSCRIPTION_STATUS,
      payload: data.items.length !== 0,
    });
  } catch (error) {
    console.log("Error fetching subscription status:", error.message);
    dispatch({
      type: SET_SUBSCRIPTION_STATUS,
      payload: false,
    });
  }
};
