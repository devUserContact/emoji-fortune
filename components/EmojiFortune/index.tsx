import React from "react";
import { useState } from "react";
import EmojiDisplay from "../EmojiDisplay";
import { emoji } from "../../assets/emoji.json";
import styles from "../../styles/Main.module.scss";

const EmojiFortune = () => {
	const [fortune, setFortune] = useState([{}]);
	let emojiArray: {
		pictogram: string;
		CLDR: string;
		unicode: string;
		"UTF-8": string;
	}[] = [];
	let fortuneArray: {
		pictogram: any;
		description: any;
		unicode: any;
		"UTF-8": any;
	}[] = [];
	let randSet = new Set();
	emoji.map((emoji) => {
		if (emoji.checked === true) {
			emojiArray.push(...emoji.catalog);
		}
	});
	const generateFortune = () => {
		randomGen(3, emojiArray.length);
		randSet.forEach((randNum: any) => {
			let emojiObject = {
				pictogram: emojiArray[randNum].pictogram,
				description: emojiArray[randNum].CLDR,
				unicode: emojiArray[randNum].unicode,
				"UTF-8": emojiArray[randNum]["UTF-8"],
			};
			fortuneArray.push(emojiObject);
		});
		setFortune(fortuneArray);
		randSet.clear();
		fortuneArray = [];
	};
	const revealFortune = () => {
		generateFortune();
	};
	function randomGen(quantity: number, max: number) {
		while (randSet.size < quantity) {
			randSet.add(Math.floor(Math.random() * max) + 1);
		}
		return randSet;
	}
	return (
		<>
			<button className={styles.bttn} type="button" onClick={revealFortune}>
				reveal fortune
			</button>
			<div className={styles.textContainer}>
				{fortune.map((emojiItem: any, key: number) => {
					return <EmojiDisplay key={key} emojiItem={emojiItem} />;
				})}
			</div>
		</>
	);
};

export default EmojiFortune;
