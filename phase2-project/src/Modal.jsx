import React from "react";


const Modal = ({ setShowModal, selectedCard }) => {
    return (
        <div>
            <div className="modal" onClick={() => setShowModal(false)}>
                <div className="modal-content">
                    <div className="modal-header">
                        <button className="exit-btn" onClick={() => setShowModal(false)}>x</button>
                        <img className="card image" src={selectedCard.image} />
                        <h1 className="modal-title">{selectedCard.name}</h1>
                        <h2 className="modal-title"> Doth created in thee {selectedCard.century} Century</h2>
                    </div>
                    <div className="modal-body">
                        <h3 className="h3-modal"> Ye Ole Ingredients:
                            <p className="p-modal">{selectedCard.ingredients}</p>
                        </h3>
                        <h3 className="h3-modal"> Thee Corky Instructions: 
                            <p className="p-modal">{selectedCard.instructions}</p>
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal