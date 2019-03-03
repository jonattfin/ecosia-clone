import { createSelector } from 'reselect';

const getPayload = (state) => state.home;

export const getModel = createSelector([getPayload], (payload) => {
  return {
    ...payload
  };
});
