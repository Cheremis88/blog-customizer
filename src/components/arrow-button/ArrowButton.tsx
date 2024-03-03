import arrow from 'src/images/arrow.svg';
import clsx from 'clsx';
import styles from './ArrowButton.module.scss';
import { MouseEvent } from 'react';

/** Функция для обработки открытия/закрытия формы */
export type OnClick = (evt: MouseEvent) => void;
type ff = {
	onClick: OnClick;
	isOpen: boolean;
};

export const ArrowButton = ({ onClick, isOpen }: ff) => {
	return (
		/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
		<div
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			className={clsx(styles.container, isOpen && styles.container_open)}
			onClick={onClick}>
			<img
				src={arrow}
				alt='иконка стрелочки'
				className={clsx(styles.arrow, isOpen && styles.arrow_open)}
			/>
		</div>
	);
};
