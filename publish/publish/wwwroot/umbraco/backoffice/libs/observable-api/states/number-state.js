import { UmbBasicState } from './basic-state.js';
/**
 * @class UmbNumberState
 * @augments {BehaviorSubject<T>}
 * @description - State holding data of number, this ensures the data is unique, not updating any Observes unless there is an actual change of the value bu using `===`.
 */
export class UmbNumberState extends UmbBasicState {
    constructor(initialData) {
        super(initialData);
    }
}
