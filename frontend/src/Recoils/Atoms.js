import { atom } from "recoil";

export const isLoginIn = atom({
  key: "isLogin",
  default: false,
});

export const userRecoil = atom({
  key: "userRecoil",
  default: "",
});
// export default isLoginIn;
