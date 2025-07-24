import { joinUser } from "@/helpers";
import { v4 as uuid } from "uuid";
import users from "./users";
import { isEqual, size, trim } from "lodash";

const posts = [
  {
    id: uuid(),
    username: "emily",
    text: "Don't miss the wonderful moments with your loved ones at Bistecca restaurant and enjoy the night sky lit up by the Danang International Fireworks Festival 2023! Whether you choose indoor or outdoor tables, we're sure you'll have unforgettable moments! Reserve your table today and immerse yourself in the festive season at Bistecca restaurant with spectacular fireworks performances! 😍😍😍",
    like: false,
    image: [
      "https://i.pinimg.com/1200x/84/cf/cb/84cfcb82528bdca1bd8320e5408b6579.jpg",
      "https://i.pinimg.com/736x/7f/86/c0/7f86c02f7c1a04db9013f26595d26238.jpg",
      "https://i.pinimg.com/564x/26/b9/d9/26b9d9b2206e15a260aee0a565674f8c.jpg",
      "https://i.pinimg.com/564x/46/fe/a0/46fea0ecb1396046a0fc02dc9697cdbe.jpg",
      "https://i.pinimg.com/564x/bb/8b/67/bb8b67a2186ba8c5b35a242c47f952e7.jpg",
    ],
    createdAt: String(new Date("2023-05-23").toISOString()),

    comments: [
      {
        id: uuid(),
        name: "Sirikakire",
        text: "Hi hi 😛",
        image: "",
        createdAt: "29 May 2023",
        avatar: "https://i.pinimg.com/736x/49/bf/fe/49bffe149353fc16e64426463ff2d855.jpg",
      },
      {
        id: uuid(),
        name: "Sirikakire",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        image: "",
        createdAt: "29 May 2023",
        avatar: "https://i.pinimg.com/736x/49/bf/fe/49bffe149353fc16e64426463ff2d855.jpg",
        reply: [
          {
            id: "rl1",
            name: "Sirikakire",
            text: "Reply Comment😥😥",
            image: "",
            createdAt: "29 May 2023",
            avatar: "/shirikane.jpg",
          },
          {
            id: "rl2",
            name: "Hieu",
            text: "Hihi😥😥",
            image: "",
            createdAt: "29 May 2023",
            avatar: "/avatarhieu123.jpg",
          },
        ],
      },
      {
        id: uuid(),
        name: "Sirikakire",
        text: "Sad....😥😥",
        image: "",
        createdAt: "29 May 2023",
        avatar: "https://i.pinimg.com/736x/49/bf/fe/49bffe149353fc16e64426463ff2d855.jpg",
      },
      {
        id: uuid(),
        name: "Sirikakire",
        text: "Test Comment1 kkkk",
        image: "",
        createdAt: "29 May 2023",
        avatar: "https://i.pinimg.com/736x/49/bf/fe/49bffe149353fc16e64426463ff2d855.jpg",
      },
      {
        id: uuid(),
        name: "Sirikakire",
        text: "Don’t cry because it’s over, smile because it happened",
        image: "",
        createdAt: "29 May 2023",
        avatar: "https://i.pinimg.com/736x/49/bf/fe/49bffe149353fc16e64426463ff2d855.jpg",
      },
      {
        id: uuid(),
        name: "Sirikakire",
        text: " I’m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can’t handle me at my worst, then you sure as hell don’t deserve me at my best",
        image: "",
        createdAt: "29 May 2023",
        avatar: "https://i.pinimg.com/736x/49/bf/fe/49bffe149353fc16e64426463ff2d855.jpg",
      },
      {
        id: uuid(),
        name: "Sirikakire",
        text: "Test Comment",
        image: "",
        createdAt: "29 May 2023",
        avatar: "https://i.pinimg.com/736x/49/bf/fe/49bffe149353fc16e64426463ff2d855.jpg",
      },
      {
        id: uuid(),
        name: "Sirikakire",
        text: "Test Comment",
        image: "",
        createdAt: "29 May 2023",
        avatar: "https://i.pinimg.com/736x/49/bf/fe/49bffe149353fc16e64426463ff2d855.jpg",
      },
      {
        id: uuid(),
        name: "Sirikakire",
        text: "Test Comment",
        image: "",
        createdAt: "29 May 2023",
        avatar: "https://i.pinimg.com/736x/49/bf/fe/49bffe149353fc16e64426463ff2d855.jpg",
      },
      {
        id: uuid(),
        name: "Sirikakire",
        text: "Test Comment",
        image: "",
        createdAt: "29 May 2023",
        avatar: "https://i.pinimg.com/736x/49/bf/fe/49bffe149353fc16e64426463ff2d855.jpg",
      },
      {
        id: uuid(),
        name: "Sirikakire",
        text: "Test Comment",
        image: "",
        createdAt: "29 May 2023",
        avatar: "https://i.pinimg.com/736x/49/bf/fe/49bffe149353fc16e64426463ff2d855.jpg",
      },
    ],
    likeCount: 123,
  },
  {
    id: uuid(),
    username: "anhduy",
    text: "🥰Hẹn em lần yêu thứ 2 #musicchill #NhạcChill #speedsongs #nhacnaychillphet #nhacchill #lofi #henemlanyeuthu2 #xuhuong",
    like: true,
    image: ["https://i.pinimg.com/736x/ed/cd/4f/edcd4f99a89d2fd1e1750c89b252b637.jpg"],
    createdAt: String(new Date("2023-05-23").toISOString()),
    comments: [
      {
        id: uuid(),
        name: "Sirikakire",
        text: "Hhihihihi ❣️ 💕 💞 💓 !!!!",
        image: "",
        createdAt: "29 May 2023",
        avatar: "/shirikane.jpg",
      },
      {
        id: uuid(),
        name: "Sirikakire",
        text: "hahahaaa...^^ 🥺",
        image: "",
        createdAt: "29 May 2023",
        avatar: "/shirikane.jpg",
      },
    ],
    likeCount: 12,
  },
  {
    id: uuid(),
    username: "rudy",
    text: "#ChillMộtChút #ChillMỗiNgày #lofichill1 #StatusTâmTrạng #Letterchill #buồn #music #videolyrics # Everything is arranged by fate",
    like: true,
    image: [
      "https://i.pinimg.com/564x/7b/40/9d/7b409dec10981d318c52a45e74bd6d71.jpg",
      "https://i.pinimg.com/564x/8f/92/20/8f9220d90a8678bbaa6990de8cc9e810.jpg",
      "https://i.pinimg.com/564x/55/c3/e9/55c3e93c2b108778dfc86915968f10bc.jpg",
      "https://i.pinimg.com/564x/7c/3a/c0/7c3ac05ee9ff4cc370f03f58c1d78261.jpg",
    ],
    createdAt: String(new Date("2023-05-23").toISOString()),
    comments: [
      {
        id: uuid(),
        name: "Sirikakire",
        text: "Test Comment",
        image: "",
        createdAt: "29 May 2023",
        avatar: "/shirikane.jpg",
      },
    ],
    likeCount: 53,
  },
  {
    id: uuid(),
    username: "sirikakire",
    text: "😢😢#CapCut chắc do em không đủ tốt ..! #chillmộtchút #videotâmtrạngbuồn #tâmtrạng #lofilyrics #phongcảnhbuồn #đemkhuya",
    like: false,
    image: [
      "https://i.pinimg.com/564x/7c/b3/c1/7cb3c1b6a018d656fe61cd4f26f6842f.jpg",
      "https://i.pinimg.com/236x/fa/75/ba/fa75ba0d4106871084d10f14eaedf6a6.jpg",
    ],
    createdAt: String(new Date("2023-05-23").toISOString()),
    comments: [
      {
        id: uuid(),
        name: "Sirikakire",
        text: "Test Comment",
        image: "",
        createdAt: "29 May 2023",
        avatar: "/shirikane.jpg",
      },
    ],
    likeCount: 130,
  },
  {
    id: uuid(),
    username: "emily",
    text: "Câu nói bạn cần ngay lúc này? #tamtrang #foryou #lyrics #xuhuong",
    like: false,
    image: [],
    video: ["/videopost1.mp4"],
    createdAt: String(new Date("2023-05-23").toISOString()),
    comments: [
      {
        id: uuid(),
        name: "Sirikakire",
        text: "Test Comment",
        image: "",
        createdAt: "29 May 2023",
        avatar: "/shirikane.jpg",
      },
    ],
    likeCount: 115,
  },
  {
    id: uuid(),
    username: "isa",
    text: "🥰🥰Chúc các bạn ngủ ngon#12cunghoangdao#12chomsao#lyrics #nhactamtrangofficial #music #nhacnaychillphet #tamtrang #chillmộtchút #lofichill #nhữngbàihátbuồn #capcup #chill",
    like: false,
    image: [
      "https://i.pinimg.com/564x/65/a2/44/65a24402400f30c565f82ba6c1f20197.jpg",
      "https://i.pinimg.com/564x/88/07/cd/8807cd29905ccf193a829747b18dbe2a.jpg",
      "https://i.pinimg.com/564x/ee/98/ca/ee98ca977359a00244be8e7b01998a72.jpg",
    ],
    createdAt: String(new Date("2023-05-23").toISOString()),
    comments: [
      {
        id: uuid(),
        name: "Caryln",
        text: "Test Comment",
        image: "",
        createdAt: "29 May 2023",
        avatar: "/caryln.jpg",
      },
    ],
    likeCount: 32,
  },
  {
    id: uuid(),
    username: "hieu123",
    text: "#Don’t wait for the perfect moment, take moment and make it perfect 😊😊",
    like: false,
    image: [],
    video: ["/videopost.mp4"],
    createdAt: String(new Date("2023-05-23").toISOString()),
    comments: [
      {
        id: uuid(),
        name: "Caryln",
        text: "Test Comment",
        image: "",
        createdAt: "29 May 2023",
        avatar: "/caryln.jpg",
      },
    ],
    likeCount: 25,
  },
  {
    id: uuid(),
    username: "hieu123",
    text: "Đừng đánh giá người khác qua vẻ bề ngoài. 😉",
    like: false,
    image: ["https://i.pinimg.com/originals/38/d3/0e/38d30ecfe41c21551c043443d330d637.gif"],
    createdAt: String(new Date("2023-05-23").toISOString()),
    comments: [
      {
        id: uuid(),
        name: "Caryln",
        text: "Test Comment",
        image: "",
        createdAt: "29 May 2023",
        avatar: "/caryln.jpg",
      },
    ],
    likeCount: 23,
  },
  {
    id: uuid(),
    username: "hieu123",
    text: "I am pretty good about taking breaks. I know when it's time to step aside and chill out...",
    like: false,
    image: [
      "https://i.pinimg.com/564x/5f/12/b9/5f12b955aea67eb568d713b68b537eb4.jpg",
      "https://i.pinimg.com/564x/10/04/0d/10040d92ee52e6e5ff8a062304f44642.jpg",
    ],
    createdAt: String(new Date("2023-05-23").toISOString()),
    comments: [
      {
        id: uuid(),
        name: "Rudy",
        text: "Test Comment",
        image: "",
        createdAt: "29 May 2023",
        avatar: "/avataranime.jpg",
      },
    ],
    likeCount: 13,
  },
  {
    id: uuid(),
    username: "hoaemi",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum provident commodi recusandae, iure necessitatibus doloremque placeat sit, id rem ex similique cumque in saepe quam minima a temporibus fugiat architecto?",
    like: false,
    image: ["https://i.pinimg.com/736x/29/30/19/293019f1cccdd7e528d44e11388f1e58.jpg"],
    createdAt: String(new Date("2023-05-23").toISOString()),
    comments: [
      {
        id: uuid(),
        name: "Rudy",
        text: "Test Comment",
        image: "",
        createdAt: "29 May 2023",
        avatar: "/avataranime.jpg",
      },
    ],
    likeCount: 3,
  },
  {
    id: uuid(),
    username: "hoaemi",
    text: "Đừng đánh giá người khác qua vẻ bề ngoài. 😉",
    like: false,
    image: ["https://i.pinimg.com/564x/55/3b/cf/553bcf2ce862e1b9df6036ad16edd417.jpg"],
    createdAt: String(new Date("2023-05-23").toISOString()),
    comments: [
      {
        id: uuid(),
        name: "Rudy",
        text: "Test Comment",
        image: "",
        createdAt: "29 May 2023",
        avatar: "/avataranime.jpg",
      },
    ],
    likeCount: 13,
  },
  {
    id: uuid(),
    username: "hoaemi",
    text: "I am pretty good about taking breaks. I know when it's time to step aside and chill out...",
    like: false,
    image: [
      "https://i.pinimg.com/564x/0e/a1/48/0ea14810ad2fd711ade6e983bfabc4ed.jpg",
      "https://i.pinimg.com/564x/c5/60/0d/c5600dabb8269cfc93fba652cb119364.jpg",
      "https://i.pinimg.com/564x/c5/9f/8c/c59f8c64dfdb6d681fca19a652b9d52d.jpg",
      "https://i.pinimg.com/564x/9b/d0/3c/9bd03c25ad4e5fa3476472930fe6dd1a.jpg",
    ],
    createdAt: String(new Date("2023-05-23").toISOString()),
    comments: [
      {
        id: uuid(),
        name: "Rudy",
        text: "Test Comment",
        image: "",
        createdAt: "29 May 2023",
        avatar: "/avataranime.jpg",
      },
    ],
    likeCount: 3,
  },
  {
    id: uuid(),
    username: "hoaemi",
    text: "I am pretty good about taking breaks. I know when it's time to step aside and chill out...",
    like: false,
    image: ["https://i.pinimg.com/564x/63/77/17/637717e86f2abfa0cc19cab8a282612a.jpg"],
    createdAt: String(new Date("2023-05-23").toISOString()),
    comments: [
      {
        id: uuid(),
        name: "Rudy",
        text: "Test Comment",
        image: "",
        createdAt: "29 May 2023",
        avatar: "/avataranime.jpg",
      },
    ],
    likeCount: 23,
  },
];

const getPostsApi = ({ username, page, limit }: any) => {
  const START = Number(limit) * (Number(page) - 1);
  const END = Number(limit) * Number(page);

  if (!username && !page && !limit) {
    return new Promise((resolve) => setTimeout(() => resolve({ items: joinUser(posts, users), total: size(posts) }), 1500));
  }

  if (username) {
    const result = joinUser(posts, users).filter((item: any) => isEqual(item?.username, trim(username)));

    return new Promise((resolve) => setTimeout(() => resolve({ items: result.slice(START, END), total: size(result) }), 1500));
  }

  return new Promise((resolve) => setTimeout(() => resolve({ items: joinUser(posts, users).slice(START, END), total: size(posts) }), 1500));
};

export default getPostsApi;
