import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer/reducer';
import reducerAdmin from './reducer/reducerAdmin';
import reducerAdminClient from './reducer/reducerAdminClient';
import reducerAdminFormule from './reducer/reducerAdminFormule';
import reducerAdminInformation from './reducer/reducerAdminInformation';
import reducerAdminPack from './reducer/reducerAdminPack';
import reducerAdminPicture from './reducer/reducerAdminPicture';
import reducerAdminPrestation from './reducer/reducerAdminPrestation';
import reducerAdminSlider from './reducer/reducerAdminSlider';
import reducerAdminTag from './reducer/reducerAdminTag';


export const store = configureStore({
    reducer: {
        app: reducer,
        admin: reducerAdmin,
        adminClient: reducerAdminClient,
        adminFormule: reducerAdminFormule,
        adminInformation: reducerAdminInformation,
        adminPack: reducerAdminPack,
        adminPicture: reducerAdminPicture,
        adminPrestation: reducerAdminPrestation,
        adminSlider: reducerAdminSlider,
        adminTag: reducerAdminTag,
    }
});