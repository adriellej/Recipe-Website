
const ConfirmationMessage = ({ message, onConfirm, onCancel }) => {
    return (
        <div className="confirmation_message">
            <p>{message}</p>
            <div className="confirmation_buttons">
                <button onClick={onConfirm}>Confirm</button>
                <button onClick={onCancel}>Cancel</button>
            </div>
        </div>
    );
}

export default ConfirmationMessage;
