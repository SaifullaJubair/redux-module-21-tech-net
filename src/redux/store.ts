// import { configureStore } from '@reduxjs/toolkit';
// import cartSlice from './features/cart/cartSlice';
// const store = configureStore({
//   reducer: {
//     cart: cartSlice,
//   },
// });

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice';

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// export default store;

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export default store;
