import { createAction, props } from '@ngrx/store';

export const addUserData = createAction(
  '[User] Add User Data',
  props<{ user: any }>()
);
export const updateUserData = createAction(
  '[User] Update User Data',
  props<{ user: any }>()
);
export const removeUserData = createAction('[User] Remove User Data');
export const toggleSideBar = createAction(
  '[SideBar] Toggle Side Bar',
  props<{ open: boolean }>()
);
export const setIpState = createAction(
  '[ipState] Set Ip State',
  props<{ ip: any }>()
);
