import React from "react";
import { useEffect } from "react";
import { emoji } from "../../assets/emoji.json";
import styles from "../../styles/Main.module.scss";

const EmojiFortune = () => {

	let emojiArray = [];
	let fortuneDraw = [];
	let fortuneArray = [];
	const randSet = new Set();
	useEffect(() => {
	}, [])

	emoji.map((emoji) => {
		if (emoji.checked === true) {
			emojiArray.push(...emoji.catalog);
		}
	});
	
	randomGen(3, emojiArray.length);
	function randomGen(quantity, max) {
		while (randSet.size < quantity) {
			randSet.add(Math.floor(Math.random() * max) + 1);
		}
		return randSet;
	}

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
			}</p>
		</div>
	);
};

export default EmojiFortune;
