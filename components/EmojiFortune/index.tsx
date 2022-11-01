import React from "react";
import { useState, useCallback } from "react";
import Image from "next/image";
import EmojiDisplay from "../EmojiDisplay";
import { emoji } from "../../assets/emoji.json";
import CopyIcon from "../../assets/CopyIcon.svg";
import copy from "copy-to-clipboard";
import styles from "../../styles/Main.module.scss";

const EmojiFortune = () => {
	const copyIcon = CopyIcon;
	const [fortune, setFortune] = useState([{}]);
	const [fortuneString, setFortuneString] = useState("");
	const [isHidden, setIsHidden] = useState(false);
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
		let fortuneString: string = "";
		fortuneArray.map((fortuneItem: string) => {
			fortuneString += `${String(fortuneItem.pictogram) + " "}`;
		});
		setFortuneString(fortuneString);
		randSet.clear();
		setIsHidden(true);
		return fortuneString;
	};
	const showButton = useCallback(() => {
		setIsHidden((prevValue) => !prevValue);
	}, []);
	const revealFortune = () => {
		generateFortune();
	};
	const copyFortune = () => {
		copy(fortuneString);
		alert("emoji fortune copied");
	};
	function randomGen(quantity: number, max: number) {
		while (randSet.size < quantity) {
			randSet.add(Math.floor(Math.random() * max) + 1);
		}
		return randSet;
	}
	return (
		<>
			<button
				className={styles.fortuneButton}
				type="button"
				onClick={revealFortune}
			>
				reveal fortune
			</button>
			<div className={styles.containerFlex}>
				<div className={styles.spacerFlex}></div>
				<div className={styles.emojiFlex}>
					{fortune.map((emojiItem: any, key: number) => {
						return <EmojiDisplay key={key} emojiItem={emojiItem} />;
					})}
				</div>
				{isHidden && (
					<div className={styles.cpFlex}>
						<button
							className={styles.cpButton}
							type="button"
							onClick={copyFortune}
						>
							<div className={styles.copyIcon}>
								<Image src={copyIcon} />
							</div>
						</button>
					</div>
				)}
			</div>
		</>
	);
};

export default EmojiFortune;
