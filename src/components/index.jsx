import { createElement } from "react";
import Teaser from "./Teaser";
import Feature from "./Feature";
import Page from "./Page";
import Grid from "./Grid";

const Components = {
	teaser: Teaser,
	feature: Feature,
	page: Page,
	grid: Grid,
};

const DynamicComponent = (blok) => {
	if (typeof Components[blok?.component] !== "undefined") {
		return createElement(Components[blok?.component], {
			key: blok?._uid,
			content: blok,
		});
	}

	return createElement(
		() => <div>The component {blok?.component} has not been created yet.</div>,
		{ key: blok?._uid }
	);
};

export default DynamicComponent;
