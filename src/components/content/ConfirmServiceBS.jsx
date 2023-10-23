import React, { useState, useRef, useContext, createContext } from "react";
import { Modal } from "bootstrap";

// Create Context
const ConfirmContext = createContext();

export const useConfirm = () => useContext(ConfirmContext);

export const ConfirmServiceProvider = ({ children }) => {
    const [options, setOptions] = useState(null);
    const awaitingPromiseRef = useRef(null);

    const openModal = (options) => {
        setOptions(options);

        let myModal = new Modal(document.getElementById("myModal"));
        myModal.show();

        return new Promise((resolve, reject) => {
            awaitingPromiseRef.current = { resolve, reject };
        });
    };

    const handleClose = () => {
        if (awaitingPromiseRef.current) {
            awaitingPromiseRef.current.reject();
        }
        setOptions(null);
    };

    const handleConfirm = () => {
        if (awaitingPromiseRef.current) {
            awaitingPromiseRef.current.resolve();
        }
        setOptions(null);
    };

    return (
        <>
            <ConfirmContext.Provider value={openModal} children={children} />
            <div className="modal" tabIndex="-1" id="myModal">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content rounded-4 p-3">
                        {options && options.title ? (
                            <div className="modal-header border-bottom-0">
                                <h3 className="modal-title">{options.title}</h3>
                            </div>
                        ) : null}
                        {options && options.text ? (
                            <div className="modal-body">
                                <p className="mb-0">{options.text}</p>
                            </div>
                        ) : null}
                        <div className="modal-footer border-top-0">
                            <button type="button" className="btn btn-lg btn-link text-body text-decoration-none px-0 mx-0" data-bs-dismiss="modal" onClick={handleConfirm}>
                                {options && options.confirmText ? options.confirmText : "Подтвердить"}
                            </button>
                            <button type="button" className="btn btn-lg btn-link text-body text-decoration-none  ms-4 px-0 mx-0" data-bs-dismiss="modal" onClick={handleClose}>
                                {options && options.cancelText ? options.cancelText : "Отменить"}
                                
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
