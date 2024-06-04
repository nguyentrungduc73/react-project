import { RootState } from "src/store/store";

export const selectUserInfo = (state: RootState) => state.user.user;