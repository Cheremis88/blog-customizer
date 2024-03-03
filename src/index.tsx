import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { defaultArticleState } from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const defaultState = {
		'--font-family': defaultArticleState.fontFamilyOption.value,
		'--font-size': defaultArticleState.fontSizeOption.value,
		'--font-color': defaultArticleState.fontColor.value,
		'--container-width': defaultArticleState.contentWidth.value,
		'--bg-color': defaultArticleState.backgroundColor.value,
	};
	const [state, setState] = useState(defaultState);

	function resetStyles() {
		setState(defaultState);
	}

	return (
		<div className={clsx(styles.main)} style={state as CSSProperties}>
			<ArticleParamsForm change={setState} reset={resetStyles} />
			<Article />
		</div>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
