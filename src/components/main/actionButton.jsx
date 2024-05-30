import './actionButton.css';

const ActionButton = ({ label, onClick, className }) => (
  <button className={`action-button ${className}`} onClick={onClick}>
    {label}
  </button>
);

export default ActionButton;
