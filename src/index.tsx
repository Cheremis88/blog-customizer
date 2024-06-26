import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { defaultArticleState } from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const [pageState, setPageState] = useState(defaultArticleState);

	const pageStyles = {
		'--font-family': pageState.fontFamilyOption.value,
		'--font-size': pageState.fontSizeOption.value,
		'--font-color': pageState.fontColor.value,
		'--container-width': pageState.contentWidth.value,
		'--bg-color': pageState.backgroundColor.value,
	};

	return (
		<div className={styles.main} style={pageStyles as CSSProperties}>
			<ArticleParamsForm pageState={pageState} setPageState={setPageState} />
			<Article />
		</div>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
