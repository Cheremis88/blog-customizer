import { Text } from 'components/text';
import clsx from 'clsx';
import styles from './Button.module.scss';

export const Button = ({
	title,
	type,
}: {
	title: string;
	onClick?: (event: MouseEvent) => void;
	type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
}) => {
	return (
		<button
			className={clsx(styles.button, type === 'reset' && styles.button_reset)}
			type={type}>
			<Text weight={800} uppercase>
				{title}
			</Text>
		</button>
	);
};
