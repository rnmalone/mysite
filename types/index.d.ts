import 'jest-enzyme';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any,
        __INITIAL_STATE__: any
    }
}
