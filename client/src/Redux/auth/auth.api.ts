import axios, { AxiosResponse } from "axios";
import { LoginData, SignupData } from "../../utils/types";

export const userLoginAPI = async (payload: LoginData) => {
  try {
    let res: AxiosResponse<{ token: string; userID: string }> =
      await axios.post(
        "https://smoggy-fawn-bonnet.cyclic.app/user/login",
        payload
      );
    sessionStorage.setItem("token", res.data.token);
    sessionStorage.setItem("token", res.data.userID);
    return res.data.token;
  } catch (err) {
    console.log("userLoginAPI error", err);
  }
};

export const userSignupAPI = async (payload: SignupData) => {
  try {
    let res = await axios.post(
      "https://smoggy-fawn-bonnet.cyclic.app/user/register",
      payload
    );
    return res.data;
  } catch (err) {
    console.log("userSignupAPI error: ", err);
  }
};
