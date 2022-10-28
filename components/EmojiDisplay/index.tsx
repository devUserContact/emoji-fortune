import React from "react";
import { useState, useCallback } from "react";
import styles from "../../styles/Main.module.scss";

const EmojiDisplay = ({ emojiItem }: any) => {
	const [isShown, setIsShown] = useState(false);

	const showDescription = useCallback(() => {
		setIsShown((prevValue) => !prevValue);
	}, []);

	return (
		<div
			className={styles.emojiContainer}
			onMouseEnter={showDescription}
			onMouseLeave={showDescription}
		>
			<p className={styles.pictogramText}>{emojiItem.pictogram}</p>
			{isShown && (
				<div className={styles.descriptionContainer}>
					<p className={styles.descriptionText}>{emojiItem.description}</p>
				</div>
			)}
		</div>
	);
};

export default EmojiDisplay;
