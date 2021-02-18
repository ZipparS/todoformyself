import { testDB } from '../../test-db/test-db';

export const getStoreItems = (storeName) => {
    return testDB[storeName];
};