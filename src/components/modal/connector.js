import { createConnectorForSelector } from '../../helpers';
import { createSelector } from 'reselect';

import {
    isVisible,
    title,
    id,

    /*actions*/
    hideModal
} from './modal';

const modalSelector = createSelector(
    [isVisible, title, id],
    (show, title, id) => ({ show, title, id })
);

export const modalConnector = createConnectorForSelector(modalSelector, {
    onHide: () => hideModal()
});
