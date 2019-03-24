import React from 'react';
import { Modal, Button } from 'react-bootstrap'

class DeleteOrAdminModal extends React.Component {
  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {
          this.props.userNotFound ?

            <div>

              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                  User not found!
              </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>
                  Please check if the user is misspelled.
              </p>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.props.onHide}>Close</Button>
              </Modal.Footer>
            </div>
            :
            <div>
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                  Do you want to ...
              </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h4>make this user Admin?</h4>
                <p>
                  This option will set the selected user as a new Admin.
              </p>
                <h4>or delete?</h4>
                <p>
                  This option will permanently delete the selected user from our database.
              </p>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.props.onHide}>Close</Button>
                <Button variant="primary" onClick={this.props.adminConversion}>Admin</Button>
                <Button variant="danger" onClick={this.props.deleteUser}>Delete</Button>
              </Modal.Footer>
            </div>
    }
    </Modal>
);
}
}

export default DeleteOrAdminModal;