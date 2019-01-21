
/**
 * Mixin for listening to pushstate event.
 */
const PushStateListener = {

    componentDidMount() {
        this.onPushstate = this.onPushstate.bind(this);
        window.addEventListener('pushstate', this.onPushstate);
    },


    componentWillUnmount() {
        window.removeEventListener('pushstate', this.onPushstate);
    }

};

export default PushStateListener;