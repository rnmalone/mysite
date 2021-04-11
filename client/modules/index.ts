import locale, { ILocaleState } from './locale';
import dom, { IDOMState } from './dom';

export {default as locale} from './locale';
export {default as dom} from './dom';

export const globalReducers = {
    locale,
    dom
}

export interface IAppState {
    locale: ILocaleState;
    dom: IDOMState;
}