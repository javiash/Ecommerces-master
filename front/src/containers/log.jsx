import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { connect } from 'react-redux'
import {setShowModal, setHideModal} from '../store/actions/actions'
import Reg from './logreg'



class Log extends React.Component {




    render() {
        return (
            
            <ButtonToolbar>
                <Button
                    variant="primary"
                    onClick={this.props.setShowModal}
                >
                    Register new User
        </Button>

        <Reg show={this.props.showModal} />
      </ButtonToolbar>
    );
  }
}

function mapStateToProps(state) {
  return {
    showModal: state.showModal
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setShowModal: () => dispatch(setShowModal()),
    setHideModal: () => dispatch(setHideModal())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Log);
