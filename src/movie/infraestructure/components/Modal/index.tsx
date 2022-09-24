import React from "react";
import ReactDOM from "react-dom";
import styles from './styles.module.css'

const modalNode = document.getElementById("portal-root") as HTMLElement;

interface IModal {
	closeModal: () => void
	open: boolean
	children: JSX.Element | JSX.Element[] | string
}

const renderContent = (props: IModal) => {
	return ReactDOM.createPortal(
		<div>
			<div className={styles.background} onClick={props.closeModal} />
			<div className={styles.modal}>
				<button className={styles.modal__close} onClick={props.closeModal}>
					&times;
				</button>
				{props.children}
			</div>
		</div>,
		modalNode
	);
};

const Modal = (props: IModal) => {
	return props.open ? renderContent(props) : null;
};

export default Modal;