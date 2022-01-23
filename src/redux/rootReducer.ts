import { combineReducers } from 'redux';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
// slices
import chatReducer from './slices/chat';
import calendarReducer from './slices/calendar';
import eventReducer from './slices/event';
import clubReducer from './slices/club';
import categoryReducer from './slices/category';

// ----------------------------------------------------------------------

const createNoopStorage = () => ({
  getItem(_key: string) {
    return Promise.resolve(null);
  },
  setItem(_key: string, value: any) {
    return Promise.resolve(value);
  },
  removeItem(_key: string) {
    return Promise.resolve();
  },
});

const storage = typeof window !== 'undefined' ? createWebStorage('local') : createNoopStorage();

const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  whitelist: [],
};



const rootReducer = combineReducers({
  chat: chatReducer,
  calendar: calendarReducer,
  // events: eventReducer,
  // club: clubReducer,
  // category : categoryReducer
});

export { rootPersistConfig, rootReducer };
