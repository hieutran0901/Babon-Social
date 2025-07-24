import { filter, get, isEmpty, isEqual, trim } from "lodash";
import { v4 as uuid } from "uuid";

const users = [
  {
    id: uuid(),
    name: "Hieu Tran",
    username: "hieu0901",
    password: "123456",
    avatar: "https://i.pinimg.com/564x/56/f4/a6/56f4a6a936d34a0cd2ee793894739524.jpg",
    coverPicture: "https://i.pinimg.com/564x/36/89/01/368901bd80d63c44701b95ab857a700e.jpg",
    bio: "I'm FE Developer",
  },
  {
    id: uuid(),
    name: "Minh Hieu",
    username: "hieu123",
    password: "123456",
    avatar: "https://i.pinimg.com/564x/cb/7e/c1/cb7ec19b434a10a0c8d5641fec0f00a1.jpg",
    coverPicture: "https://i.pinimg.com/564x/e8/2d/c7/e82dc7c82cc5dec0145a2fa8cf21eff4.jpg",
    bio: "Hi I'm Hieu",
    friends: [
      {
        username: "emily",
        avatar: "https://i.pinimg.com/736x/49/bf/fe/49bffe149353fc16e64426463ff2d855.jpg",
      },
      {
        username: "sirikakire",
        avatar: "https://i.pinimg.com/564x/da/9a/46/da9a4641ec05835561fb0486729270af.jpg",
      },
      {
        username: "anhduy",
        avatar: "https://i.pinimg.com/736x/08/78/0c/08780c623015ec01d5fe0364aabfff16.jpg",
      },
    ],
  },
  {
    id: uuid(),
    name: "Hoa Emi",
    username: "hoaemi",
    password: "123456",
    avatar: "https://i.pinimg.com/736x/eb/8f/ef/eb8fef805ac91de7edeb3b9647cb33de.jpg",
    bio: "💚 Hi, I'm HoaEmi 💚",
    coverPicture: "https://i.pinimg.com/564x/e8/2d/c7/e82dc7c82cc5dec0145a2fa8cf21eff4.jpg",
    friends: [
      {
        username: "emily",
        avatar: "https://i.pinimg.com/736x/49/bf/fe/49bffe149353fc16e64426463ff2d855.jpg",
      },
      {
        username: "hieu123",
        avatar: "https://i.pinimg.com/564x/cb/7e/c1/cb7ec19b434a10a0c8d5641fec0f00a1.jpg",
      },
      {
        username: "anhduy",
        avatar: "https://i.pinimg.com/736x/08/78/0c/08780c623015ec01d5fe0364aabfff16.jpg",
      },
    ],
  },
  {
    id: uuid(),
    name: "Emily",
    username: "emily",
    password: "123456",
    avatar: "https://i.pinimg.com/736x/49/bf/fe/49bffe149353fc16e64426463ff2d855.jpg",
    bio: "🍉🍉 Hi, I'm Emily",
    coverPicture: "/coverimageprofile2.jpg",
  },
  {
    id: uuid(),
    name: "TrNguyenAnhDuy",
    username: "anhduy",
    password: "123456",
    avatar: "https://i.pinimg.com/736x/08/78/0c/08780c623015ec01d5fe0364aabfff16.jpg",
    bio: "Hi, I'm TrNguyenAnhDuy 💜",
  },
  {
    id: uuid(),
    name: "Sirikakire",
    username: "sirikakire",
    password: "123456",
    avatar: "https://i.pinimg.com/564x/da/9a/46/da9a4641ec05835561fb0486729270af.jpg",
    bio: "💜 Hi, I'm Sirikakire 💜",
    coverPicture: "/coverimageprofile3.jpg",
  },
  {
    id: uuid(),
    name: "Caryln",
    username: "caryln",
    password: "123456",
    avatar: "https://i.pinimg.com/564x/75/03/6a/75036a34bd1f8f3a49037cc1f9290106.jpg",
    bio: "💙 Don’t let a bad day make you feel like you have a bad life. 💕💕",
  },
  {
    id: uuid(),
    name: "Rudy",
    username: "rudy",
    password: "123456",
    avatar: "https://i.pinimg.com/564x/f5/9a/74/f59a740cb12b21b32fca3c631eb925c7.jpg",
    coverPicture: "https://i.pinimg.com/564x/c1/d2/aa/c1d2aac54845853893ba92be208e7c08.jpg",
    bio: "💙 There are days like that, quietly, not sad, not happy, slowly drift… the end of a day.",
  },
  {
    id: uuid(),
    name: "William",
    username: "william",
    password: "123456",
    avatar: "https://i.pinimg.com/736x/c7/a8/e1/c7a8e136163f4d3d4b51d43c5a6dc400.jpg",
    bio: "Hi, I'm William",
  },
  {
    id: uuid(),
    name: "Laura",
    username: "laura",
    password: "123456",
    avatar: "https://i.pinimg.com/736x/49/6a/dd/496add80b4f57ddeea4a9b9e0daa4c26.jpg",
    bio: "Hi, I'm Laura",
  },
  {
    id: uuid(),
    name: "Felicia",
    username: "felicia",
    password: "123456",
    avatar: "/avatarfalicia.jpg",
    bio: "💙 Learn from yesterday, live for today, hope for tomorrow. The important is to not stop questioning.",
  },
  {
    id: uuid(),
    name: "Jacintha",
    username: "jacintha",
    password: "123456",
    avatar: "https://i.pinimg.com/736x/ee/72/9e/ee729eda45763146823fc4f440f6f7a6.jpg",
    bio: "Hi, I'm Jacintha 💕💕",
  },
  {
    id: uuid(),
    name: "Isa",
    username: "isa",
    password: "123456",
    avatar: "https://i.pinimg.com/736x/f5/63/51/f563515b628c16283eb35ae755ff7c2e.jpg",
    bio: "Hi, I'm Isa 💕💕",
  },
  {
    id: uuid(),
    name: "Lucinda",
    username: "lucinda",
    password: "123456",
    avatar: "https://i.pinimg.com/736x/89/4a/3f/894a3fa234c94ed92381f748cf5aa039.jpg",
    bio: "Hi, I'm Lucinda 💕💕",
  },
  {
    id: uuid(),
    name: "Marabel",
    username: "marabel",
    password: "123456",
    avatar: "https://i.pinimg.com/564x/38/52/d2/3852d25993501a342dc918d4e7eeaad3.jpg",
    bio: "Hi, I'm Marabel 💕💕",
  },
  {
    id: uuid(),
    name: "Hieu Tran",
    username: "hieutm0901",
    password: "123456",
    avatar: "https://i.pinimg.com/564x/f5/63/51/f563515b628c16283eb35ae755ff7c2e.jpg",
    bio: "Hi, I'm Hieu ne 💕💕",
  },
  {
    id: uuid(),
    name: "Serena",
    username: "serena",
    password: "123456",
    avatar: "https://i.pinimg.com/564x/d3/4e/76/d34e76c57d6dfe31b802bd2f7c697160.jpg",
    bio: "Hi, I'm Serena 💕💕",
  },
  {
    id: uuid(),
    name: "Jen",
    username: "christopher",
    password: "123456",
    avatar: "https://i.pinimg.com/736x/f4/33/d0/f433d0dcaa1f97bf72646f5daf7e05ee.jpg",
    bio: "Hi, I'm Jen 💕💕",
  },
  {
    id: uuid(),
    name: "Chae",
    username: "chae",
    password: "123456",
    avatar: "https://i.pinimg.com/564x/ce/38/db/ce38db7e58e9f6e8598dddf2d9516fdb.jpg",
    bio: "Hi, I'm Chae 💕💕",
  },
];

export const loginApi = ({ username, password }: any) => {
  const account = filter(users, (user: any) => user.username === trim(username) && user.password === trim(password));

  if (!isEmpty(account)) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ token: get(get(account, "[0]"), "username") });
      }, 1500);
    });
  }

  return { token: "" };
};

export const getMeApi = ({ token }: any) => {
  const account = filter(users, (user: any) => user?.username === trim(token));

  if (!isEmpty(account)) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(get(account, "[0]"));
      }, 1500);
    });
  }

  return { token: "" };
};

// const getUserByUsername = (request: Request, response: Response, next: NextFunction) => {
//   const username = String(request.params.username || "");

//   const user = filter(users, (user: any) => user.username === trim(username));

//   if (!isEmpty(user) && username !== "") {
//     return response.status(200).json({
//       ...user[0],
//     });
//   }

//   return response.status(404).json({ status: "error", message: "User does not exist." });
// };

// const getUsers = (request: Request, response: Response, next: NextFunction) => {
//   return response.status(200).json({ items: users, total: size(users) });
// };

export default users;
// export { loginApi, getMe };
