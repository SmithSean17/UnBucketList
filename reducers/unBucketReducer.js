import * as types from '../types/actionsTypes.js';

// Set initial state
const initialState = {
  isLoggedIn: false,
  username: '',
  events: [],
  lastEventId: 1000,
};

const unBucketReducer = (state = initialState, action) => {
  let events = state.events.slice();
  let lastEventId = state.lastEventId;

  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        username: action.payload,
      };

    case types.SET_EVENTS:
      return {
        ...state,
        events: action.payload,
      };

    case types.ADD_EVENT:
      lastEventId++;
      const {
        eventName,
        eventDetails,
        eventLoc,
        eventTime,
        eventGuests,
      } = action.payload;
      const newEvent = {
        eventId: lastEventId,
        eventName,
        eventDetails,
        eventLoc,
        eventTime,
        eventGuests,
      };
      events.push(newEvent);
      return {
        ...state,
        lastEventId,
        events,
      };

    case types.EDIT_EVENT:
      events.forEach((elem) => {
        if (elem.eventId === action.payload.eventId) {
          event = action.payload;
        }
      });
      return {
        ...state,
        events,
      };

    case types.DELETE_EVENT:
      events.forEach((elem, index) => {
        if (elem.eventId === action.payload.eventId) {
          events.splice(index, 1);
        }
      });
      return {
        ...state,
        events,
      };

    default:
      return state;
  }
};

export default unBucketReducer;
