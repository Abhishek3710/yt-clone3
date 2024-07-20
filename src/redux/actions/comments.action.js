import request from "../../api";
import {
  COMMENT_LIST_FAIL,
  COMMENT_LIST_REQUEST,
  COMMENT_LIST_SUCCESS,
  CREATE_COMMENT_FAIL,
  CREATE_COMMENT_SUCCESS,
} from "../actionType";

export const getCommentsOfVideoById = (id) => async (dispatch) => {
  try {
    dispatch({ type: COMMENT_LIST_REQUEST });
    const { data } = await request("/commentThreads", {
      params: {
        part: "snippet",
        videoId: id,
      },
    });

    console.log(data);

    dispatch({ type: COMMENT_LIST_SUCCESS, payload: data.items });
  } catch (error) {
    dispatch({ type: COMMENT_LIST_FAIL, payload: error.message });
  }
};

export const addComment = (id, text) => async (dispatch, getState) => {
  try {
    const obj = {
      snippet: {
        videoId: id,
        topLevelComment: {
          snippet: {
            textOriginal: text,
          },
        },
      },
    };

    const token = getState().auth.accessToken;
    if (!token) throw new Error("No access token available");

    await request.post("/commentThreads", obj, {
      params: {
        part: "snippet",
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // dispatch({ type: CREATE_COMMENT_SUCCESS });
    // setTimeout(() => {
    //   dispatch(getCommentsOfVideoById(id));
    // }, 4000);
    setTimeout(() => dispatch(getCommentsOfVideoById(id)), 6000);
  } catch (error) {
    dispatch({ type: CREATE_COMMENT_FAIL, payload: error.message });
  }
};
