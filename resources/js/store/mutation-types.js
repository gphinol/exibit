// auth.js
export const LOGOUT = 'LOGOUT';
export const SAVE_TOKEN = 'SAVE_TOKEN';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const SET_TWO_FA_REQUIRED = 'SET_TWO_FA_REQUIRED';
export const UPDATE_USER = 'UPDATE_USER';
export const SET_TOKEN_CHECK_INTERVAL = 'SET_TOKEN_CHECK_INTERVAL';
export const CLEAR_TOKEN_CHECK_INTERVAL = 'CLEAR_TOKEN_CHECK_INTERVAL';
//two_fa.js
export const SET_TWO_FA_ERROR = 'SET_TWO_FA_ERROR';
export const SET_TWO_FA_SMS_STATUS = 'SET_TWO_FA_SMS_STATUS';
export const CLEAR_TWO_FA_SMS_INTERVAL = 'CLEAR_TWO_FA_SMS_INTERVAL';
export const TICK_TWO_FA_SMS_INTERVAL = 'TICK_TWO_FA_SMS_INTERVAL';
export const RESET_SMS_STATUS = 'RESET_SMS_STATUS';
//lang.js
export const SET_LOCALE = 'SET_LOCALE';
//socket.js
export const SET_SOCKET_ID = 'SET_SOCKET_ID';
//markets.js
export const SET_MARKETS = 'SET_MARKETS';
export const UPDATE_MARKET = 'UPDATE_MARKET';
export const SET_MARKET_ORDER = 'SET_MARKET_ORDER';
export const REMOVE_MARKET_ORDER = 'REMOVE_MARKET_ORDER';
export const SET_MARKET_ORDERS = 'SET_MARKET_ORDERS';
export const SET_MARKET_HISTORY = 'SET_MARKET_HISTORY';
export const PUSH_MARKET_HISTORY = 'PUSH_MARKET_HISTORY';
export const REFRESH_ORDERBOOK = 'REFRESH_ORDERBOOK';
//wallets.js
export const SET_WALLETS = 'SET_WALLETS';
export const UPDATE_WALLET = 'UPDATE_WALLET';
//fiatwallets.js
export const SET_FIATWALLETS = 'SET_FIATWALLETS';
export const UPDATE_FIATWALLET = 'UPDATE_FIATWALLET';
//orders.js
export const SET_ORDERS = 'SET_ORDERS';
export const UPDATE_ORDER = 'UPDATE_ORDER';
export const REMOVE_ORDER = 'REMOVE_ORDER';