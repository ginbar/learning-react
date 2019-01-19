import Router from './Router';
import HashChangeListener from "../../utils/HashChangeListener";


/**
 * A Class for routing using the hash.
 */
 class HashRouter extends Router {

    constructor(props) {
        super(props);
        
        this.state = {
            link: location.hash.replace('#', '') || '/'
        };        
    }


    onHashchange(event) {
        const [_, hash] = event.newURL.split('#');
        this.setState({ link: hash });
    }
    
}

// Mixing with HashChangeListener
Object.assign(HashRouter.prototype, HashChangeListener);

export default HashRouter;