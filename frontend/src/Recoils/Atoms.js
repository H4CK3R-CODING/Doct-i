import { atom } from "recoil";

export const isLoginIn = atom({
  key: "isLogin",
  default: false,
});

export const userRecoil = atom({
  key: "userRecoil",
  default: "",
});

export const userId = atom({
  key: "userId",
  default: ""
})

const Atoms = {
  isLoginIn,
  userRecoil,
  userId
}
export default Atoms;
