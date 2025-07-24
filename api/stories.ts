import { joinUser } from "@/helpers";
import { v4 as uuid } from "uuid";
import users from "./users";
import { size } from "lodash";

const stories = [
  {
    id: uuid(),
    username: "caryln",
    image: "/story1.jpg",
    video: ["/meow.mp4", "/meow1.mp4"],
    confirmSeen: false,
  },
  {
    id: uuid(),
    username: "rudy",
    image: "/story2.jpg",
    video: ["/meow2.mp4", "/meow3.mp4", "/meow4.mp4"],
    confirmSeen: false,
  },
  {
    id: uuid(),
    username: "emily",
    image: "/story3.jpg",
    video: ["/meow5.mp4"],
    confirmSeen: false,
  },
  {
    id: uuid(),
    username: "serena",
    image: "/story4.jpg",
    video: ["/meow6.mp4"],
    confirmSeen: false,
  },
  {
    id: uuid(),
    username: "hieutm0901",
    image: "/coverstory1.jpg",
    video: ["/meow7.mp4"],
    confirmSeen: false,
  },
  {
    id: uuid(),
    username: "hieu123",
    image: "/coverstoryhieu.jpg",
    video: ["/meow8.mp4"],
    confirmSeen: false,
  },

  {
    id: uuid(),
    username: "christopher",
    image: "/story5.jpg",
    video: ["/meow9.mp4"],
    confirmSeen: false,
  },
  {
    id: uuid(),
    username: "chae",
    image: "/story6.jpg",
    video: ["/meow10.mp4"],
    confirmSeen: false,
  },
  {
    id: uuid(),
    username: "laura",
    image: "/coverlaurastory.jpg",
    video: ["/meow11.mp4"],
    confirmSeen: false,
  },
  {
    id: uuid(),
    username: "william",
    image: "/covervideostory.jpg",
    video: ["/meow12.mp4"],
    confirmSeen: false,
  },
  {
    id: uuid(),
    username: "hieu123",
    image: "/coverlaurastory1.jpg",
    video: ["/meow13.mp4"],
    confirmSeen: false,
  },
  {
    id: uuid(),
    username: "emily",
    image: "/chill1.jpg",
    video: ["/meow14.mp4"],
    confirmSeen: false,
  },
  {
    id: uuid(),
    username: "caryln",
    image: "/coverstorycarlyn.jpg",
    video: ["/meow15.mp4"],
    confirmSeen: false,
  },
];

const getStoriesApi = ({ username, page, limit }: any) => {
  const START = Number(limit) * (Number(page) - 1);
  const END = Number(limit) * Number(page);

  return new Promise((resolve) => setTimeout(() => resolve({ items: joinUser(stories, users), total: size(stories) }), 1500));
};

export default getStoriesApi;
