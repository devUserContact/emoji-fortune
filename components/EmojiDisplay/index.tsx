import React from "react";
import { useState, useCallback } from "react";
import styles from "../../styles/Main.module.scss";

const EmojiDisplay = ({ emojiItem }: any) => {
	const [isShown, setIsShown] = useState(false);
	return (
			<p className={styles.paragraphText}>{emojiItem.pictogram}</p>
	);
};

export default EmojiDisplay;
