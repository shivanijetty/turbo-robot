import React from "react";


const Modal = ({ setShowModal, selectedCard }) => {
    return (
        <div>
            <div className="modal" onClick={() => setShowModal(false)}>
                <div className="modal-content">
                    <div className="modal-header">
                        <img src={selectedCard.image} />
                        <h1 className="modal-title">{selectedCard.name}</h1>
                        <h1 className="modal-title"> Doth created in thee {selectedCard.century} Century</h1>
                    </div>
                    <div className="modal-body">
                        <h2>{selectedCard.ingredients}</h2>
                        <h2>{selectedCard.instructions}</h2>
                    </div>
                </div>
                <div className="modal-footer">
                    <button onClick={() => setShowModal(false)}>Bring Meself Back</button>
                </div>
            </div>
        </div>
    )
}

export default Modal