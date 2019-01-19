
/**
 * Mixin for listening to hashChange event.
 */
const HashChangeListener = {

    componentDidMount() {
        this.onHashchange = this.onHashchange.bind(this);
        window.addEventListener('hashchange', this.onHashchange);
    },


    componentWillUnmount() {
        window.removeEventListener('hashchange', this.onHashchange);
    }

};

export default HashChangeListener;