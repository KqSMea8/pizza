import { OrderWeakSchema } from '@entity/schema';

/**
 * action type
 */
export const UPDATE_ORDER = Symbol('UPDATE_ORDER');

/**
 * action creator
 */
const updateAddress = (order: OrderWeakSchema) => ({
  order,
  type: UPDATE_ORDER,
});

export default {
  updateAddress,
};