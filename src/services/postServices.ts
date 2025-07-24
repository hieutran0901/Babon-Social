import { size } from "lodash";
import { publicRequest } from "../request";
import getPostsApi from "@/../api/posts";

const postServices = {
  getPosts: ({ username, page, limit }: any) => {
    return getPostsApi({ username, page, limit });

    // return publicRequest.request({
    //   method: "GET",
    //   url: "/posts",
    //   params: { username, page, limit },
    // });
  },
};

export default postServices;
