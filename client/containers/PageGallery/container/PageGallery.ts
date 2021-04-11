import { connect } from 'react-redux';
import { IAppState } from "../../../modules";
import PageGallery from "../component/PageGallery";

const mapStateToProps = (state: IAppState) => ({
    domHash: state.dom.hash
})

export default connect(mapStateToProps)(PageGallery);
