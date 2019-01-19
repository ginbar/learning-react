import Router from './Router';


/**
 * A Class for routing using the hash.
 */
export default class HashRouter extends Router {

    constructor(props) {
        super(props);
        
        this.state = {
            link: location.hash.replace('#', '') || '/'
        };
        
        this.onHashchange = this.onHashchange.bind(this);
    }


    componentDidMount() {
        window.addEventListener('hashchange', this.onHashchange);
    }


    componentWillUnmount() {
        window.removeEventListener('hashchange', this.onHashchange);
    }


    onHashchange(event) {
        const [_, hash] = event.newURL.split('#');
        this.setState({ link: hash });
    }
    
};