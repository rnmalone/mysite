import { connect } from 'react-redux';
import Socials from "../component/Socials";
import { setDOMHash } from "../../../modules/dom";

const mapDispatchToProps = {
    setDOMHash
}

export default connect(null, mapDispatchToProps)(Socials);
