import { UmbBasicState } from './basic-state.js';
/**
 * @class UmbBooleanState
 * @augments {UmbBasicState<T>}
 * @description - This state ensures the data is unique, not updating any Observes unless there is an actual change of the value.
 */
export class UmbBooleanState extends UmbBasicState {
    constructor(initialData) {
        super(initialData);
    }
}
