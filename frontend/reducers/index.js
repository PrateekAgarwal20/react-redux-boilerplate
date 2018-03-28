// Import frameworks
import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';

// Import reducers

// Config necessary for state persistance
const config = {
  key: 'primary',
  storage,
};

// Root reducer combines all separate reducers and calls appropriate one
const rootReducer = persistCombineReducers(config, {
  // stateName: reducerImported
});

// Export the root reducer
export default rootReducer;
