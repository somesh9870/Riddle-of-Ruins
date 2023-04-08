import axios, { AxiosResponse } from "axios";
import { LoginData, SignupData } from "../../utils/types";

let url=""
export const userLoginAPI = async (payload: LoginData) => {
    try {
        let res: AxiosResponse<{ token: string }> = await axios.post(
            "https://smoggy-fawn-bonnet.cyclic.app/user/login",
            payload
        );
        return res.data;
    } catch (err) {
        console.log("userLoginAPI error", err);
    }
};

export const userSignupAPI = async (payload: SignupData) => {
    try {
        await axios.post(
            "https://smoggy-fawn-bonnet.cyclic.app/user/register",
            payload
        );
    } catch (err) {
        console.log("userSignupAPI error: ", err)
    }
};
