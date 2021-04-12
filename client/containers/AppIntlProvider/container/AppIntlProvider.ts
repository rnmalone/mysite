import { connect } from 'react-redux';
import AppIntlProvider from "../component/AppIntlProvider";
import { IAppState } from "../../../modules";

const mapStateToProps = (state: IAppState) => ({
    ...state.locale,
})

export default connect(mapStateToProps)(AppIntlProvider)