import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { useState, useRef, FormEvent } from 'react';
import { Text } from '../text';
import { Select } from '../select';
import { RadioGroup } from '../radio-group';
import { Separator } from '../separator';
import clsx from 'clsx';
import { useOutsideClickClose } from '../select/hooks/useOutsideClickClose';
import {
	ArticleStateType,
	defaultArticleState,
	fontFamilyOptions,
	fontSizeOptions,
	fontColors,
	backgroundColors,
	contentWidthArr,
} from 'src/constants/articleProps';

import styles from './ArticleParamsForm.module.scss';

type TFormProps = {
	pageState: ArticleStateType;
	setPageState: (newState: ArticleStateType) => void;
};

export const ArticleParamsForm = ({ pageState, setPageState }: TFormProps) => {
	const [formState, setFormState] = useState(pageState);
	const [isOpen, setIsOpen] = useState<boolean>(false);

	function changeStyles(evt: FormEvent) {
		evt.preventDefault();
		setPageState(formState);
	}

	function resetStyles() {
		setPageState(defaultArticleState);
		setFormState(defaultArticleState);
	}

	const rootRef = useRef<HTMLElement>(null);

	useOutsideClickClose({
		isOpen,
		rootRef,
		onClose: (target) => {
			!target.closest('ul') && setIsOpen(!isOpen);
		},
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
				<form
					className={styles.form}
					onReset={resetStyles}
					onSubmit={changeStyles}>
					<Text as={'h2'} size={31} weight={800} uppercase>
						Задайте параметры
					</Text>
					<Select
						selected={formState.fontFamilyOption}
						options={fontFamilyOptions}
						title={'Шрифт'}
						onChange={(value) =>
							setFormState({ ...formState, fontFamilyOption: value })
						}></Select>

					<RadioGroup
						name={'fontsize'}
						options={fontSizeOptions}
						selected={formState.fontSizeOption}
						title={'Размер шрифта'}
						onChange={(value) =>
							setFormState({ ...formState, fontSizeOption: value })
						}></RadioGroup>

					<Select
						selected={formState.fontColor}
						options={fontColors}
						title={'Цвет шрифта'}
						onChange={(value) =>
							setFormState({ ...formState, fontColor: value })
						}></Select>

					<Separator />

					<Select
						selected={formState.backgroundColor}
						options={backgroundColors}
						title={'Цвет фона'}
						onChange={(value) =>
							setFormState({ ...formState, backgroundColor: value })
						}></Select>
					<Select
						selected={formState.contentWidth}
						options={contentWidthArr}
						title={'Ширина контента'}
						onChange={(value) =>
							setFormState({ ...formState, contentWidth: value })
						}></Select>

					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
