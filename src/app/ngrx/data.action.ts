import { createAction, props } from '@ngrx/store';

export const addCategory = createAction(
  '[Category] Add Category',
  props<{ category: any }>(),
);
export const addUserData = createAction(
  '[User] Add User Data',
  props<{ user: any }>(),
);
export const updateUserData = createAction(
  '[User] Update User Data',
  props<{ user: any }>(),
);
export const removeUserData = createAction('[User] Remove User Data');
export const toggleSideBar = createAction(
  '[SideBar] Toggle Side Bar',
  props<{ open: boolean }>(),
);
export const toggleSlider = createAction(
  '[SideBar] Toggle Slider',
  props<{ open: boolean }>(),
);
export const toggleAlternateLoader = createAction(
  '[Loader] Toggle Alternate Loader',
  props<{ show: boolean }>(),
);
export const sortCollecton = createAction(
  '[Sort] Sort Collection',
  props<{ value: number }>(),
);
export const addCarouselData = createAction(
  '[Carousel] Add Carousel',
  props<{ carousel: any }>(),
);
export const addFlowData = createAction(
  '[Flow] Add Flow Data',
  props<{ flow: any }>(),
);
export const updateFlowData = createAction(
  '[Flow] Update Flow Data',
  props<{ flow: any }>(),
);
export const removeFlowData = createAction('[Flow] Remove Flow Data');
export const collectionSearching = createAction(
  '[Searching] Collection Searching',
  props<{ searching: boolean }>(),
);
export const setCategoryName = createAction(
  '[CategoryName] Set Category Name',
  props<{ name: string }>(),
);
export const setSearchState = createAction(
  '[searchState] Set Search State',
  props<{ search: boolean }>(),
);
export const setIpState = createAction(
  '[ipState] Set Ip State',
  props<{ ip: any }>(),
);
