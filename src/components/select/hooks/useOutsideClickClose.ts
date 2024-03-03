import { useEffect } from 'react';

type UseOutsideClickClose = {
	isOpen: boolean;
	onChange?: (newValue: boolean) => void;
	onClose?: (target: HTMLElement) => void;
	rootRef: React.RefObject<HTMLElement>;
};

export const useOutsideClickClose = ({
	isOpen,
	rootRef,
	onClose,
	onChange,
}: UseOutsideClickClose) => {
	useEffect(() => {
		const handleClick = (event: MouseEvent) => {
			const { target } = event;
			if (target instanceof HTMLElement && !rootRef.current?.contains(target)) {
				isOpen && onClose?.(target);
				onChange?.(false);
			}
		};

		window.addEventListener('click', handleClick);

		return () => {
			window.removeEventListener('click', handleClick);
		};
	}, [onClose, onChange, isOpen]);
};
