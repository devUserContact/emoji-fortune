import React from "react";
import { emoji } from "../../assets/emoji.json";
import styles from "../../styles/Main.module.scss";

const EmojiFortune = () => {
//  const [smileysAndPeople, setSmileysAndPeople] = useState(true);
//  const [, set] = useState(true);
//  const [, set] = useState(true);
//  const [, set] = useState(true);
//  const [, set] = useState(true);
//  const [, set] = useState(true);
//  const [, set] = useState(true);
//  const [, set] = useState(true);
//	emojiCategories =	Object.keys(emoji)
	let fortuneArray = [];
	emoji.map((emoji) => {
		console.table(emoji.category)
		if (emoji.checked === true ) {
			fortuneArray.push(...emoji.catalog)
		}
	})
	console.log(fortuneArray)
	return (
		<div className={styles.textContainer}>
			<p className={styles.paragraphText}>
				{fortuneArray[308].pictogram}
			</p>
		</div>
	);
};

export default EmojiFortune;
