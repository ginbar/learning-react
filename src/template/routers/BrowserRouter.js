import Router from './Router';
import PushStateListener from "../../utils/PushStateListener";


/**
 * A class for routing using the browser.
 */
class BrowserRouter extends Router {

    constructor(props) {
        super(props);

        this.state = {
            link: window.location.pathname || '/'
        };
    }


    onPushstate(event) {
        event.preventDefault();
        this.setState({ link: location.pathname });
    }

};

// Mixing with PushStateListener
Object.assign(BrowserRouter.prototype, PushStateListener);

export default BrowserRouter;