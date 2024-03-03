import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { useState, useRef } from 'react';
import { Text } from '../text';
import { Select } from '../select';
import { RadioGroup } from '../radio-group';
import clsx from 'clsx';
import { useOutsideClickClose } from '../select/hooks/useOutsideClickClose';

import {
	fontFamilyOptions,
	fontSizeOptions,
	fontColors,
	backgroundColors,
	contentWidthArr,
} from 'src/constants/articleProps';

import styles from './ArticleParamsForm.module.scss';

type TFormProps = {
	change: React.Dispatch<React.SetStateAction<any>>;
	reset: () => void;
};

export const ArticleParamsForm = ({ change, reset }: TFormProps) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [fontFamily, setFontFamily] = useState(fontFamilyOptions[0]);
	const [fontSize, setFontSize] = useState(fontSizeOptions[0]);
	const [fontColor, setFontColor] = useState(fontColors[0]);
	const [bgColor, setBgColor] = useState(backgroundColors[0]);
	const [width, setWidth] = useState(contentWidthArr[0]);

	const rootRef = useRef<HTMLElement>(null);
	change(4);
	reset();
	useOutsideClickClose({
		isOpen,
		rootRef,
		onClose: () => setIsOpen(!isOpen),
	});

	return (
		<>
			<ArrowButton
				onClick={(evt) => {
					evt.stopPropagation();
					setIsOpen(!isOpen);
				}}
				isOpen={isOpen}
			/>

			<aside
				ref={rootRef}
				className={clsx(styles.container, isOpen && styles.container_open)}>
				<form className={styles.form}>
					<Text as={'h2'} size={31} weight={800} uppercase>
						Задайте параметры
					</Text>
					<Select
						selected={fontFamily}
						options={fontFamilyOptions}
						title={'Шрифт'}
						onChange={setFontFamily}></Select>

					<RadioGroup
						name={'fontsize'}
						options={fontSizeOptions}
						selected={fontSize}
						title={'Размер шрифта'}
						onChange={setFontSize}></RadioGroup>

					<Select
						selected={fontColor}
						options={fontColors}
						title={'Цвет шрифта'}
						onChange={setFontColor}></Select>
					<Select
						selected={bgColor}
						options={backgroundColors}
						title={'Цвет фона'}
						onChange={setBgColor}></Select>
					<Select
						selected={width}
						options={contentWidthArr}
						title={'Ширина контента'}
						onChange={setWidth}></Select>

					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
