import { State } from '@ngrx/store';
import * as fromFilter from './filter.actions';

const initialState: fromFilter.ValidFilters = 'All';

export function filterReducer(state = initialState, action: fromFilter.FilterActions): fromFilter.ValidFilters {
    switch (action.type) {
        case fromFilter.FilterActionTypes.SetFilter: {
            return action.filter;
        }

        default: {
            return state;
        }
    }
}
