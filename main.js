  // Get the elements from the HTML document
let saveEl = document.getElementById("save-el")  
let countEl = document.getElementById("count-el")
let incrementEl = document.getElementById("increment-el")
let increment5El = document.getElementById("increment-5-el")
let increment10El = document.getElementById("increment-10-el")
// Get the previous entries element by its new id
let previousEntriesEl = document.getElementById("previous-entries")

// Initialize the count variable
let count = 0

// Define a function to update the count display
function updateCount() {
  countEl.textContent = count
}

 // Define a function to increment the count by a given value
function increment(value) {
  // Check if the value is valid
  if (typeof value === "number" && value > 0) {
    // Add the value to the count
    count += value
    // Update the count display
    updateCount()
    // Play a sound effect
    let sound = new Audio("click.mp3");
sound.play();

}
}

 // Define a function to save the count and reset it
function save() {
  // Create a new text node with the count and a dash
  let countDash = document.createTextNode(count + " - ")
  // Append the text node to the previous entries element
  previousEntriesEl.appendChild(countDash)
  // Reset the count to zero
  count = 0
  // Update the count display
  updateCount()
  // Play a sound effect
  let sound = new Audio("click.mp3")
  sound.play()
}


// Add event listeners to the buttons
incrementEl.addEventListener("click", function() {
  // Increment the count by 1
  increment(1)
})

increment5El.addEventListener("click", function() {
  // Increment the count by 5
  increment(5)
})

increment10El.addEventListener("click", function() {
  // Increment the count by 10
  increment(10)
})

saveEl.addEventListener("click", save)

