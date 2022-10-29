import React from "react";
import { useEffect, useState } from "react";
import EmojiDisplay from "../EmojiDisplay";
import { emoji } from "../../assets/emoji.json";
import styles from "../../styles/Main.module.scss";

const EmojiFortune = () => {
	const [fortune, setFortune] = useState([{}]);
	const [isShown, setIsShown] = useState(false);
	const generateFortune = () => {
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
		const randSet = new Set();
		emoji.map((emoji) => {
			if (emoji.checked === true) {
				emojiArray.push(...emoji.catalog);
			}
		});

		randomGen(5, emojiArray.length);

		function randomGen(quantity: number, max: number) {
			while (randSet.size < quantity) {
				randSet.add(Math.floor(Math.random() * max) + 1);
			}
			return randSet;
		}

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
	};
	useEffect(() => {
		generateFortune();
	}, []);
	let refresh = () => {
		setFortune([]);
		generateFortune();
	};
	return (
		<>
			<button className={styles.bttn} type="button" onClick={refresh}>
				reveal fortune
			</button>
			<div className={styles.textContainer}>
				{fortune.map((emojiItem: any) => {
					return <EmojiDisplay emojiItem={emojiItem} />;
				})}
			</div>
		</>
	);
};

export default EmojiFortune;
