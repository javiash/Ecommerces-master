/* eslint react/prop-types: 0 */
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

// eslint-disable-next-line react/prefer-stateless-function
class DeleteOrAdminModal extends React.Component {
  render() {
    const {
      userNotFound, show, onHide, adminConversion, deleteUser,
      userWho, actionDone, resetActionDone,
      isAdmin,
    } = this.props;

    return (
      <Modal
        // {...this.props}
        show={show}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {
          userNotFound ? (
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
                <Button onClick={onHide}>Close</Button>
              </Modal.Footer>
            </div>
          )
            : (
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
                  {
                  actionDone
                    ? (resetActionDone(),
                    isAdmin
                      ? (
                        <div>
                          <h4>
                            {userWho}
                            {' '}
                            is now a admin.
                          </h4>

                        </div>
                      )
                      : (
                        <h4>
                          {' '}
                          {userWho}
                          {' '}
                          {' '}
                          {' '}
has been deleted
                          {' '}
                        </h4>
                      )
                    )
                    : null
                }
                  <Button onClick={onHide}>Close</Button>
                  <Button variant="primary" onClick={adminConversion}>Admin</Button>
                  <Button variant="danger" onClick={deleteUser}>Delete</Button>
                </Modal.Footer>
              </div>
            )
    }
      </Modal>
    );
  }
}

export default DeleteOrAdminModal;
