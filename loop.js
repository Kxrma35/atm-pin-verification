const correctPIN = "1234";

let attempts = 3;

for(let i =1; i <= attempts; i++) {
    let enteredPIN = window.prompt("Enter your PIN:");
}
    if (enteredPIN === correctPIN) {
        console.log("Acces Granted.");
    } else {
        console.log('Wrong PIN! Attempt ${i} of ${attempts}.');
    }

    if(i === attempts) {
        console.log("Account blocked")
    }