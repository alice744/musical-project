import { AnyAction, applyMiddleware, createStore, Store } from 'redux';
import { createWrapper, Context } from 'next-redux-wrapper';
import { reducer, RootState } from './reducers';
import { thunk, ThunkDispatch } from 'redux-thunk';

// create a makeStore function
const makeStore = (context: Context) => createStore(reducer, applyMiddleware(thunk));

// export an assembled wrapper
export const wrapper = createWrapper<RootState>(makeStore, { debug: true });


export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>