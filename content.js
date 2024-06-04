console.log("hello conten.js")


// document.addEventListener("keydown", (event) => {
// 	console.log(event.key)
//     console.log(document.activeElement);

//     if(event.key == "i" && event.altKey){
//         console.log("Alt + i pressed")

        

//     }

//     if(document.activeElement.tagName == "TEXTAREA"){
//         console.log("Editing")
//     }


// });

document.addEventListener('keydown', (event) => {
     console.log(event)

    if(event.target.tagName == "TEXTAREA"  && event.target == document.activeElement || event.target.tagName == "INPUT" && event.target == document.activeElement){
        

        if (event.key == "i" && event.altKey) {
			console.log("Alt + i pressed");

            console.log(event.target.value)
            event.target.value = event.target.value.slice(0, -1);
		}

        // if(event.key == "u" && event.altKey){
        //     let l = event.target.value
        //     l.split(" ");
        //     l.length = l.length-1;
        //     event.target.value = l;


           
        // }

        if (event.key === "u" && event.altKey) {
			let l = event.target.value.split(" "); // Splitting the value into an array of words
			l.pop(); // Removing the last word
			event.target.value = l.join(" ")// Joining the array back into a string and assigning it to the target value
		}

        if(event.key === "j" && event.altKey){
            console.log('enter pressed')

             let enterEvent = new KeyboardEvent("keydown", { key: "Enter" });
				document.dispatchEvent(enterEvent);
        }



        if(event.key == "h" && event.altKey){
            console.log("Editing")
            event.target.selectionStart = event.target.selectionStart - 1;  
            event.target.selectionEnd = event.target.selectionStart;
            
            // event.target.selectionEnd = event.target.selectionEnd - 1;
            // event.target.value = event.target.value.slice(0, event.target.selectionStart) + event.target.value.slice(event.target.selectionEnd);

            console.log(event.target.selectionStart)
            console.log(event.target.selectionEnd)
        }
    }
})

