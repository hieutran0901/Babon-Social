import { privateRequest, publicRequest } from "@/request";
import { loginApi, getMeApi } from "@/../api/users";

import { v4 as uuid } from "uuid";

const authServices: any = {
  clientLogin: ({ username, password }: any) => {
    return loginApi({ username, password });

    // return publicRequest.request({
    //   method: "POST",
    //   url: "/login",
    //   data: { username, password },
    // });
  },

  clientGetMe: ({ token }: any) => {
    return getMeApi({ token });

    // return privateRequest.request({
    //   method: "GET",
    //   url: "/me",
    // });
  },
};

export default authServices;
