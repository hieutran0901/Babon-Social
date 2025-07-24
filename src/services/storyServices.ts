import { size } from "lodash";
import { publicRequest } from "../request";
import getStoriesApi from "@/../api/stories";

const storyServices = {
  getStories: ({ username, page, limit }: any) => {
    return getStoriesApi({ username, page, limit });

    // return publicRequest.request({
    //   method: "GET",
    //   url: "/stories",
    //   params: { username, page, limit },
    // });
  },
};

export default storyServices;
