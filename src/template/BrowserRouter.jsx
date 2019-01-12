import Router from './Router';


/**
 * A class for routing using the browser.
 */
export default class BrowserRouter extends Router {

    constructor(props) {
        super(props);

        this.state = {
            link: location.pathname || '/'
        };

        this.onPushState = this.onPushState.bind(this);
    }


    componentDidMount() {
        window.addEventListener('pushState', this.onPushState);
    }


    componentWillUnmount() {
        window.removeEventListener('pushState', this.onPushState);
    }


    onPushState(event) {
        event.preventDefault();
        this.setState({ link: location.pathname });
    }

};