import React from "react";
import { useCallback } from "react";
import { emoji } from "../../assets/emoji.json";
import styles from "../../styles/Main.module.scss";

const EmojiFortune = () => {

	let emojiArray = [];
	let fortuneDraw = [];
	let fortuneArray = [];
	const randSet = new Set();

	emoji.map((emoji) => {
		if (emoji.checked === true) {
			emojiArray.push(...emoji.catalog);
		}
	});
	function randomGen(quantity, max) {
		while (randSet.size < quantity) {
			randSet.add(Math.floor(Math.random() * max) + 1);
		}
		return randSet;
	}
	randomGen(3, emojiArray.length);
	randSet.forEach((key) => {
		let emojiObject = {
			pictogram: emojiArray[key].pictogram,
			unicode: emojiArray[key].unicode,
		}
		fortuneArray.push(emojiObject);
	});

	return (
		<div className={styles.textContainer}>
			<p className={styles.paragraphText}>{
			fortuneArray[1].pictogram
			}</p>
		</div>
	);
};

export default EmojiFortune;
