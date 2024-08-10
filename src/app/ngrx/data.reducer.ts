import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import * as CryptoJS from 'crypto-js';
import {
  addCarouselData,
  addCategory,
  addFlowData,
  addUserData,
  collectionSearching,
  removeFlowData,
  removeUserData,
  setCategoryName,
  setIpState,
  setSearchState,
  sortCollecton,
  toggleAlternateLoader,
  toggleSideBar,
  toggleSlider,
  updateFlowData,
  updateUserData,
} from './data.action';
const secureKey =
  '99812f7e870613bf1b2b8b5803e5483094900d86f36b0cb46890345f36d65ac0';
const encryptData = (data: any): string => {
  const encryptedData = CryptoJS.AES.encrypt(
    JSON.stringify(data),
    secureKey,
  ).toString();
  return encryptedData;
};
const decryptData = (encryptedData: any): any => {
  const decryptedData = CryptoJS.AES.decrypt(encryptedData, secureKey).toString(
    CryptoJS.enc.Utf8,
  );
  return JSON.parse(decryptedData);
};

export interface CategoryState {
  categories: any[];
}
const initialStateCategory: CategoryState = {
  categories: localStorage.getItem('categoryRoutes')
    ? decryptData(localStorage.getItem('categoryRoutes'))
    : [],
};

export const categoryReducer = createReducer(
  initialStateCategory,
  on(addCategory, (state, { category }) => {
    const updatedCategories = [...state.categories, category];
    const encryptedUpdatedCategories = encryptData(updatedCategories);
    localStorage.setItem('categoryRoutes', encryptedUpdatedCategories);
    return { ...state, categories: [...state.categories, category] };
  }),
);

export interface CarouselState {
  carousel: any;
}
const initialStateCarousel: CarouselState = {
  // carousel: localStorage.getItem('carouselData') ? decryptData(localStorage.getItem('carouselData')) : [],
  carousel: [],
};

export const carouselReducer = createReducer(
  initialStateCarousel,
  on(addCarouselData, (state, { carousel }) => {
    const filteredCarouselArray = carousel?.map((subArray: any) =>
      subArray?.filter((item: any) => item?.uniqueName !== null),
    );
    // const encryptedUpdatedCarousel = encryptData(filteredCarouselArray);
    // localStorage.setItem('carouselData', encryptedUpdatedCarousel);
    return { ...state, carousel: filteredCarouselArray };
  }),
);

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
  }),
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
  }),
);
export interface SliderState {
  slider: any;
}
const initialSlider: SliderState = {
  slider: null,
};

export const sliderReducer = createReducer(
  initialSlider,
  on(toggleSlider, (state, { open }) => {
    return { ...state, slider: open };
  }),
);
export interface LoaderState {
  loader: boolean;
}
const initialStateLoader: LoaderState = {
  loader: false,
};
export const AlternateLoaderReducer = createReducer(
  initialStateLoader,
  on(toggleAlternateLoader, (state, { show }) => {
    return { ...state, loader: show };
  }),
);
export interface CollectionSearchState {
  searching: boolean;
}
const initialcollectionSearchState: CollectionSearchState = {
  searching: false,
};

export const CollectionSearchingReducer = createReducer(
  initialcollectionSearchState,
  on(collectionSearching, (state, { searching }) => {
    return { ...state, searching: searching };
  }),
);

export interface SortState {
  value: any;
}
const initialSortState: SortState = {
  value: null,
};

export const sortCollectionReducer = createReducer(
  initialSortState,
  on(sortCollecton, (state, { value }) => {
    return { ...state, value };
  }),
);

export interface FlowState {
  flow: any;
}

export const initialStateFlow: FlowState = {
  flow: localStorage.getItem('flowData')
    ? decryptData(localStorage.getItem('flowData'))
    : null,
};

export const flowReducer = createReducer(
  initialStateFlow,
  on(addFlowData, updateFlowData, (state, { flow }) => {
    const updatedFlow = { ...state.flow, ...flow };
    const encryptedFlow = encryptData(updatedFlow);
    localStorage.setItem('flowData', encryptedFlow);
    return { ...state, flow: updatedFlow };
  }),
  on(removeFlowData, (state) => {
    localStorage.removeItem('flowData');
    return { ...state, flow: null };
  }),
);

export interface CategoryNameState {
  name: any;
}
const initialStateCategoryName: CategoryNameState = {
  name: null,
};

export const categoryNameReducer = createReducer(
  initialStateCategoryName,
  on(setCategoryName, (state, { name }) => {
    return { ...state, name: name };
  }),
);

export interface SearchState {
  search: boolean;
}
const initialStateSearch: SearchState = {
  search: false,
};

export const searchStateReducer = createReducer(
  initialStateSearch,
  on(setSearchState, (state, { search }) => {
    return { ...state, search: search };
  }),
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
  }),
);
// Selectors for category state
export const selectCategoryState =
  createFeatureSelector<CategoryState>('category');
export const selectCategories = createSelector(
  selectCategoryState,
  (state) => state.categories,
);

// Selectors for category state
export const selectCarouselState =
  createFeatureSelector<CarouselState>('carousel');
export const selectCarousel = createSelector(
  selectCarouselState,
  (state) => state.carousel,
);

// Selectors for user state
export const selectUserState = createFeatureSelector<UserState>('user');
export const selectUser = createSelector(
  selectUserState,
  (state) => state.user,
);

// Selectors for sidebar state
export const selectSideBarState =
  createFeatureSelector<SideBarState>('sideBar');
export const selectSideBar = createSelector(
  selectSideBarState,
  (state) => state.sideBar,
);

// Selectors for slider state
export const selectSliderState = createFeatureSelector<SliderState>('slider');
export const selectSlider = createSelector(
  selectSliderState,
  (state) => state.slider,
);
// Selectors for Alternate loader state
export const selectAlternateLoaderState =
  createFeatureSelector<LoaderState>('alternateLoader');
export const selectAlternateLoader = createSelector(
  selectAlternateLoaderState,
  (state) => state.loader,
);
// Selectors for collection search state
export const selectCollectionSearchState =
  createFeatureSelector<CollectionSearchState>('searching');
export const selectCollectionSearch = createSelector(
  selectCollectionSearchState,
  (state) => state.searching,
);

// sort collection state
export const selectSortCollectionState =
  createFeatureSelector<SortState>('sortCollection');
export const selectSortCollection = createSelector(
  selectSortCollectionState,
  (state) => state.value,
);

// Selectors for user state
export const selectFlowState = createFeatureSelector<FlowState>('flow');
export const selectFlow = createSelector(
  selectFlowState,
  (state) => state.flow,
);

// Selectors for category name state
export const selectCategoryNameState =
  createFeatureSelector<CategoryNameState>('name');
export const selectCategoryName = createSelector(
  selectCategoryNameState,
  (state) => state.name,
);

// Selectors for set search state
export const selectSearchState = createFeatureSelector<SearchState>('search');
export const selectSearch = createSelector(
  selectSearchState,
  (state) => state.search,
);

// Selectors for set ip state
export const selectIpState = createFeatureSelector<IpState>('ip');
export const selectIp = createSelector(selectIpState, (state) => state.ip);
