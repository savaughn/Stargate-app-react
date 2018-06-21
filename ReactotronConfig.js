import Reactotron, {
    trackGlobalErrors,
    openInEditor,
    overlay,
    asyncStorage,
    networking
} from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';


Reactotron
    .configure({
        name: 'app'
    })
    .use(trackGlobalErrors())
    .use(openInEditor())
    .use(overlay())
    .use(asyncStorage())
    .use(networking())
    //.use(reactotronRedux())
    .connect();
console.log("Reactotron Configured");

