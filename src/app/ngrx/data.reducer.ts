import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import * as CryptoJS from 'crypto-js';
import {
  addUserData,
  removeUserData,
  setIpState,
  toggleSideBar,
  updateUserData,
} from './data.action';
const secureKey =
  '99812f7a870613hm1b2b8b5803e5483094900d86f36a0li46890345f36d65ac0';
const encryptData = (data: any): string => {
  const encryptedData = CryptoJS.AES.encrypt(
    JSON.stringify(data),
    secureKey
  ).toString();
  return encryptedData;
};
const decryptData = (encryptedData: any): any => {
  const decryptedData = CryptoJS.AES.decrypt(encryptedData, secureKey).toString(
    CryptoJS.enc.Utf8
  );
  return JSON.parse(decryptedData);
};

export interface UserState {
  user: any;
}
export const initialStateUser: UserState = {
  user: localStorage.getItem('userDetails')
    ? decryptData(localStorage.getItem('userDetails'))
    : null,
};
export const userReducer = createReducer(
  initialStateUser,
  on(addUserData, updateUserData, (state, { user }) => {
    const updatedUser = { ...state.user, ...user };
    const encryptedUser = encryptData(updatedUser);
    localStorage.setItem('userDetails', encryptedUser);
    return { ...state, user: updatedUser };
  }),
  on(removeUserData, (state) => {
    localStorage.removeItem('userDetails');
    return { ...state, user: null };
  })
);
export interface SideBarState {
  sideBar: any;
}
const initialStateSideBar: SideBarState = {
  sideBar: null,
};

export const sideBarReducer = createReducer(
  initialStateSideBar,
  on(toggleSideBar, (state, { open }) => {
    return { ...state, sideBar: open };
  })
);
export interface IpState {
  ip: any;
}
const initialStateIp: IpState = {
  ip: localStorage.getItem('ipDetails')
    ? decryptData(localStorage.getItem('ipDetails'))
    : null,
};

export const ipStateReducer = createReducer(
  initialStateIp,
  on(setIpState, (state, { ip }) => {
    const updatedIp = { ...state.ip, ...ip };
    const encryptedIp = encryptData(updatedIp);
    localStorage.setItem('ipDetails', encryptedIp);
    return { ...state, ip: updatedIp };
  })
);
// Selectors for user state
export const selectUserState = createFeatureSelector<UserState>('user');
export const selectUser = createSelector(
  selectUserState,
  (state) => state.user
);

// Selectors for sidebar state
export const selectSideBarState =
  createFeatureSelector<SideBarState>('sideBar');
export const selectSideBar = createSelector(
  selectSideBarState,
  (state) => state.sideBar
);

// Selectors for set ip state
export const selectIpState = createFeatureSelector<IpState>('ip');
export const selectIp = createSelector(selectIpState, (state) => state.ip);
