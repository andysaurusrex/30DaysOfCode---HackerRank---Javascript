// Given an integer, , perform the following conditional actions

// If n is odd, print Weird
// If n is even and in the inclusive range of 2 to 5, print Not Weird
// If n is even and in the inclusive range of 6 to 20, print Weird
// If n is even and greater than 20, print Not Weird

function main() {
    var N = parseInt(readLine());
        // If N is odd
        // Can also use !==0
        if(N % 2 == 1){
        console.log("Weird");
        // If N is even and is between 2 and 5
        } else if (N % 2 === 0 && N >= 2 && N <= 5){
        console.log("Not Weird");
        // If N is even and is between 6 and 20
        } else if (N % 2 === 0 && N >= 6 && N <= 20){
        console.log("Weird");
        // If N is even and is greater than 20
        } else if (N % 2 === 0 && N > 20){
        console.log("Not Weird");
        }
}

