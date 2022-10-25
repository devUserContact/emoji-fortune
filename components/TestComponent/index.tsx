import React from "react";
import { emoji } from "../../assets/emoji.json";
import styles from "../../styles/Main.module.scss";

const TestComponent = () => {
	console.table(emoji.objects[0]);
	return (
		<div className={styles.textContainer}>
			<p className={styles.paragraphText}>
				Sphinx of black quartz, judge my vow.
			</p>
		</div>
	);
};

export default TestComponent;
