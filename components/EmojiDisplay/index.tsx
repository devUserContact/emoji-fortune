import React from "react";
import { useState, useCallback } from "react";
import styles from "../../styles/Main.module.scss";

const EmojiDisplay = ({ emojiItem }: any) => {
	const [isVisible, setIsVisible] = useState(false);

	const showDescription = useCallback(() => {
		setIsVisible((prevValue) => !prevValue);
	}, []);

	return (
		<div
			className={styles.emojiContainer}
			onMouseEnter={showDescription}
			onMouseLeave={showDescription}
		>
			<p className={styles.pictogramText}>{emojiItem.pictogram}</p>
			<div className={styles.descriptionContainer} style={{visibility: isVisible ? 'visible': 'hidden'}}>
				<p className={styles.descriptionText}>{emojiItem.description}</p>
			</div>
		</div>
	);
};

export default EmojiDisplay;
