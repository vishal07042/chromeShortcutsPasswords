// console.log("hello conten.js");

// // document.addEventListener("keydown", (event) => {
// // 	console.log(event.key)
// //     console.log(document.activeElement);

// //     if(event.key == "i" && event.altKey){
// //         console.log("Alt + i pressed")

// //     }

// //     if(document.activeElement.tagName == "TEXTAREA"){
// //         console.log("Editing")
// //     }

// // });

// document.addEventListener("keydown", (event) => {
// 	console.log(event);

// 	if (
// 		(event.target.tagName == "TEXTAREA" &&
// 			event.target == document.activeElement) ||
// 		(event.target.tagName == "INPUT" &&
// 			event.target == document.activeElement) ||
// 		(event.target.tagName == "DIV" &&
// 			event.target == document.activeElement)
// 	) {
// 		if (event.key == "i" && event.altKey) {
// 			console.log("Alt + i pressed");

// 			console.log(event.target.value);
// 			event.target.value = event.target.value.slice(0, -1);
// 		}

// 		// if(event.key == "u" && event.altKey){
// 		//     let l = event.target.value
// 		//     l.split(" ");
// 		//     l.length = l.length-1;
// 		//     event.target.value = l;

// 		// }

// 		if (event.key === "u" && event.altKey) {
// 			let l = event.target.value.split(" "); // Splitting the value into an array of words
// 			l.pop(); // Removing the last word
// 			event.target.value = l.join(" "); // Joining the array back into a string and assigning it to the target value
// 		}

// 		if (event.key === "j" && event.altKey) {
// 			console.log("enter pressed");

// 			let enterEvent = new KeyboardEvent("keydown", { key: "Enter" });
// 			document.dispatchEvent(enterEvent);
// 		}

// 		if (event.key == "h" && event.altKey) {
// 			console.log("Editing");
// 			event.target.selectionStart = event.target.selectionStart - 1;
// 			event.target.selectionEnd = event.target.selectionStart;

// 			// event.target.selectionEnd = event.target.selectionEnd - 1;
// 			// event.target.value = event.target.value.slice(0, event.target.selectionStart) + event.target.value.slice(event.target.selectionEnd);

// 			console.log(event.target.selectionStart);
// 			console.log(event.target.selectionEnd);
// 		}
// 	}
// });


















// console.log("hello content.js");

// document.addEventListener("keydown", (event) => {
// 	console.log(event);

// 	const isEditable = (elem) => {
// 		return (
// 			elem.isContentEditable ||
// 			["TEXTAREA", "INPUT"].includes(elem.tagName)
// 		);
// 	};

// 	if (isEditable(event.target) && event.target == document.activeElement) {
// 		if (event.key == "i" && event.altKey) {
// 			console.log("Alt + i pressed");

// 			if (event.target.value !== undefined) {
// 				// Handling input and textarea
// 				console.log(event.target.value);
// 				event.target.value = event.target.value.slice(0, -1);
// 			} else if (event.target.textContent !== undefined) {
// 				// Handling contenteditable elements
// 				console.log(event.target.textContent);
// 				event.target.textContent = event.target.textContent.slice(
// 					0,
// 					-1
// 				);
// 			}
// 		}

// 		if (event.key === "u" && event.altKey) {
// 			if (event.target.value !== undefined) {
// 				// Handling input and textarea
// 				let l = event.target.value.split(" ");
// 				l.pop();
// 				event.target.value = l.join(" ");
// 			} else if (event.target.textContent !== undefined) {
// 				// Handling contenteditable elements
// 				let l = event.target.textContent.split(" ");
// 				l.pop();
// 				event.target.textContent = l.join(" ");
// 			}
// 		}

// 		if (event.key === "j" && event.altKey) {
// 			console.log("Alt + j pressed");

// 			let enterEvent = new KeyboardEvent("keydown", { key: "Enter" });
// 			document.dispatchEvent(enterEvent);
// 		}

// 		if (event.key == "h" && event.altKey) {
// 			console.log("Alt + h pressed");

// 			if (event.target.selectionStart !== undefined) {
// 				// Handling input and textarea
// 				event.target.selectionStart = event.target.selectionStart - 1;
// 				event.target.selectionEnd = event.target.selectionStart;

// 				console.log(event.target.selectionStart);
// 				console.log(event.target.selectionEnd);
// 			} else if (window.getSelection) {
// 				// Handling contenteditable elements
// 				const selection = window.getSelection();
// 				const range = selection.getRangeAt(0);
// 				if (range.startOffset > 0) {
// 					range.setStart(range.startContainer, range.startOffset - 1);
// 					range.setEnd(range.startContainer, range.startOffset);
// 					selection.removeAllRanges();
// 					selection.addRange(range);
// 				}
// 				console.log(range.startOffset);
// 				console.log(range.endOffset);
// 			}
// 		}
// 	}
// });




// console.log("hello content.js");

// document.addEventListener("keydown", (event) => {
// 	console.log(event);

// 	const isEditable = (elem) => {
// 		return (
// 			elem.isContentEditable ||
// 			["TEXTAREA", "INPUT"].includes(elem.tagName)
// 		);
// 	};

// 	if (isEditable(event.target) && event.target == document.activeElement) {
// 		if (event.key == "i" && event.altKey) {
// 			console.log("Alt + i pressed");

// 			if (event.target.value !== undefined) {
// 				// Handling input and textarea
// 				console.log(event.target.value);
// 				event.target.value = event.target.value.slice(0, -1);
// 			} else if (event.target.textContent !== undefined) {
// 				// Handling contenteditable elements
// 				let selection = window.getSelection();
// 				let range = selection.getRangeAt(0);
// 				let textNode = range.startContainer;

// 				// Ensure textNode is a Text node
// 				if (textNode.nodeType === Node.TEXT_NODE) {
// 					let text = textNode.nodeValue;
// 					textNode.nodeValue = text.slice(0, -1);
// 				}
// 			}
// 		}

// 		if (event.key === "u" && event.altKey) {
// 			if (event.target.value !== undefined) {
// 				// Handling input and textarea
// 				let l = event.target.value.split(" ");
// 				l.pop();
// 				event.target.value = l.join(" ");
// 			} else if (event.target.textContent !== undefined) {
// 				// Handling contenteditable elements
// 				let selection = window.getSelection();
// 				let range = selection.getRangeAt(0);
// 				let textNode = range.startContainer;

// 				// Ensure textNode is a Text node
// 				if (textNode.nodeType === Node.TEXT_NODE) {
// 					let words = textNode.nodeValue.split(" ");
// 					words.pop();
// 					textNode.nodeValue = words.join(" ");
// 				}
// 			}
// 		}

// 		if (event.key === "j" && event.altKey) {
// 			console.log("Alt + j pressed");

// 			let enterEvent = new KeyboardEvent("keydown", { key: "Enter" });
// 			document.dispatchEvent(enterEvent);
// 		}

// 		if (event.key == "h" && event.altKey) {
// 			console.log("Alt + h pressed");

// 			if (event.target.selectionStart !== undefined) {
// 				// Handling input and textarea
// 				event.target.selectionStart = event.target.selectionStart - 1;
// 				event.target.selectionEnd = event.target.selectionStart;

// 				console.log(event.target.selectionStart);
// 				console.log(event.target.selectionEnd);
// 			} else if (window.getSelection) {
// 				// Handling contenteditable elements
// 				const selection = window.getSelection();
// 				const range = selection.getRangeAt(0);
// 				if (range.startOffset > 0) {
// 					range.setStart(range.startContainer, range.startOffset - 1);
// 					range.setEnd(range.startContainer, range.startOffset);
// 					selection.removeAllRanges();
// 					selection.addRange(range);
// 				}
// 				console.log(range.startOffset);
// 				console.log(range.endOffset);
// 			}
// 		}
// 	}
// });













// console.log("hello content.js");

// document.addEventListener("keydown", (event) => {
// 	console.log(event);

// 	const isEditable = (elem) => {
// 		return (
// 			elem.isContentEditable ||
// 			["TEXTAREA", "INPUT"].includes(elem.tagName)
// 		);
// 	};

// 	if (isEditable(event.target) && event.target === document.activeElement) {
// 		if (event.key === "i" && event.altKey) {
// 			console.log("Alt + i pressed");

// 			if (event.target.value !== undefined) {
// 				// Handling input and textarea
// 				const start = event.target.selectionStart;
// 				const end = event.target.selectionEnd;
// 				if (start === end && start > 0) {
// 					event.target.value =
// 						event.target.value.slice(0, start - 1) +
// 						event.target.value.slice(start);
// 					event.target.selectionStart = event.target.selectionEnd =
// 						start - 1;
// 				}
// 			} else if (event.target.isContentEditable) {
// 				// Handling contenteditable elements
// 				const selection = window.getSelection();
// 				const range = selection.getRangeAt(0);
// 				if (
// 					range.startOffset === range.endOffset &&
// 					range.startOffset > 0
// 				) {
// 					const textNode = range.startContainer;
// 					if (textNode.nodeType === Node.TEXT_NODE) {
// 						textNode.nodeValue =
// 							textNode.nodeValue.slice(0, range.startOffset - 1) +
// 							textNode.nodeValue.slice(range.startOffset);
// 						range.setStart(textNode, range.startOffset - 1);
// 						range.setEnd(textNode, range.startOffset - 1);
// 						selection.removeAllRanges();
// 						selection.addRange(range);
// 					}
// 				}
// 			}
// 		}

// 		if (event.key === "u" && event.altKey) {
// 			console.log("Alt + u pressed");

// 			if (event.target.value !== undefined) {
// 				// Handling input and textarea
// 				let words = event.target.value.split(" ");
// 				words.pop();
// 				event.target.value = words.join(" ");
// 			} else if (event.target.isContentEditable) {
// 				// Handling contenteditable elements
// 				const selection = window.getSelection();
// 				const range = selection.getRangeAt(0);
// 				const textNode = range.startContainer;
// 				if (textNode.nodeType === Node.TEXT_NODE) {
// 					let words = textNode.nodeValue.split(" ");
// 					words.pop();
// 					textNode.nodeValue = words.join(" ");
// 				}
// 			}
// 		}

// 		if (event.key === "j" && event.altKey) {
// 			console.log("Alt + j pressed");

// 			let enterEvent = new KeyboardEvent("keydown", { key: "Enter" });
// 			document.dispatchEvent(enterEvent);
// 		}

// 		if (event.key === "h" && event.altKey) {
// 			console.log("Alt + h pressed");

// 			if (event.target.selectionStart !== undefined) {
// 				// Handling input and textarea
// 				event.target.selectionStart = event.target.selectionStart - 1;
// 				event.target.selectionEnd = event.target.selectionStart;

// 				console.log(event.target.selectionStart);
// 				console.log(event.target.selectionEnd);
// 			} else if (window.getSelection) {
// 				// Handling contenteditable elements
// 				const selection = window.getSelection();
// 				const range = selection.getRangeAt(0);
// 				if (range.startOffset > 0) {
// 					range.setStart(range.startContainer, range.startOffset - 1);
// 					range.setEnd(range.startContainer, range.startOffset);
// 					selection.removeAllRanges();
// 					selection.addRange(range);
// 				}
// 				console.log(range.startOffset);
// 				console.log(range.endOffset);
// 			}
// 		}
// 	}
// });









console.log("hello content.js");

document.addEventListener("keydown", (event) => {
	console.log(event);

	const isEditable = (elem) => {
		return (
			elem.isContentEditable ||
			["TEXTAREA", "INPUT"].includes(elem.tagName)
		);
	};

	if (isEditable(event.target) && event.target === document.activeElement) {
		if (event.key === "i" && event.altKey) {
			console.log("Alt + i pressed");

			if (event.target.value !== undefined) {
				// Handling input and textarea
				const start = event.target.selectionStart;
				const end = event.target.selectionEnd;
				if (start === end && start > 0) {
					event.target.value =
						event.target.value.slice(0, start - 1) +
						event.target.value.slice(start);
					event.target.selectionStart = event.target.selectionEnd =
						start - 1;
				}
			} else if (event.target.isContentEditable) {
				// Handling contenteditable elements
				const selection = window.getSelection();
				const range = selection.getRangeAt(0);
				if (
					range.startOffset === range.endOffset &&
					range.startOffset > 0
				) {
					const textNode = range.startContainer;
					if (textNode.nodeType === Node.TEXT_NODE) {
						const offset = range.startOffset;
						textNode.nodeValue =
							textNode.nodeValue.slice(0, offset - 1) +
							textNode.nodeValue.slice(offset);
						range.setStart(textNode, offset - 1);
						range.setEnd(textNode, offset - 1);
						selection.removeAllRanges();
						selection.addRange(range);
					}
				}
			}
			event.preventDefault();
		}

		if (event.key === "u" && event.altKey) {
			console.log("Alt + u pressed");

			if (event.target.value !== undefined) {
				// Handling input and textarea
				let words = event.target.value.split(" ");
				words.pop();
				event.target.value = words.join(" ");
			} else if (event.target.isContentEditable) {
				// Handling contenteditable elements
				const selection = window.getSelection();
				const range = selection.getRangeAt(0);
				const textNode = range.startContainer;
				if (textNode.nodeType === Node.TEXT_NODE) {
					let words = textNode.nodeValue.split(" ");
					words.pop();
					textNode.nodeValue = words.join(" ");
					range.setStart(textNode, textNode.nodeValue.length);
					range.setEnd(textNode, textNode.nodeValue.length);
					selection.removeAllRanges();
					selection.addRange(range);
				}
			}
			event.preventDefault();
		}

		if (event.key === "j" && event.altKey) {
			console.log("Alt + j pressed");

			let enterEvent = new KeyboardEvent("keydown", { key: "Enter" });
			document.dispatchEvent(enterEvent);
			event.preventDefault();
		}

		if (event.key === "h" && event.altKey) {
			console.log("Alt + h pressed");

			if (event.target.selectionStart !== undefined) {
				// Handling input and textarea
				event.target.selectionStart = event.target.selectionStart - 1;
				event.target.selectionEnd = event.target.selectionStart;

				console.log(event.target.selectionStart);
				console.log(event.target.selectionEnd);
			} else if (window.getSelection) {
				// Handling contenteditable elements
				const selection = window.getSelection();
				const range = selection.getRangeAt(0);
				if (range.startOffset > 0) {
					range.setStart(range.startContainer, range.startOffset - 1);
					range.setEnd(range.startContainer, range.startOffset);
					selection.removeAllRanges();
					selection.addRange(range);
				}
				console.log(range.startOffset);
				console.log(range.endOffset);
			}
			event.preventDefault();
		}
	}
});
