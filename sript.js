let myArray = [];

function displayArray() {
  const arrayDisplay = document.getElementById("array-display");
  arrayDisplay.innerHTML = ""; // Clear the previous content
  for (let i = 0; i < myArray.length; i++) {
    const element = document.createElement("div");
    element.className = "array-item";
    element.textContent = myArray[i];
    arrayDisplay.appendChild(element);
  }
}

function addElement() {
  const arrayInput = document.getElementById("array-input").value;
  if (arrayInput) {
    myArray.push(arrayInput);
    displayArray();
    document.getElementById("array-input").value = ""; // Clear input
  } else {
    alert("Please enter a value to add to the array.");
  }
}

function push() {
  const newItem = prompt("Write element to push in array..");
  if (newItem) {
    myArray.push(newItem);
    displayArray();
    document.getElementById("result-message").textContent =
      "Push() array method added element to the end.";
  } else {
    alert("No element entered.");
  }
}

function pop() {
  if (myArray.length > 0) {
    myArray.pop();
    displayArray();
    document.getElementById("result-message").textContent =
      "Pop() array method removed the last element.";
  } else {
    alert("Array is empty. Nothing to pop.");
  }
}

function shift() {
  if (myArray.length > 0) {
    myArray.shift();
    displayArray();
    document.getElementById("result-message").textContent =
      "Shift() array method removed the first element.";
  } else {
    alert("Array is empty. Nothing to shift.");
  }
}

function unshift() {
  const newItem = prompt("Write element to unshift in array..");
  if (newItem) {
    myArray.unshift(newItem);
    displayArray();
    document.getElementById("result-message").textContent =
      "Unshift() array method added element to the beginning.";
  } else {
    alert("No element entered.");
  }
}

function slice() {
  const start = parseInt(prompt("Enter start index for slice:"));
  const end = parseInt(prompt("Enter end index for slice:"));
  if (!isNaN(start) && !isNaN(end)) {
    const slicedArray = myArray.slice(start, end);
    alert("Sliced Array: " + slicedArray);
  } else {
    alert("Please enter valid numbers for slicing.");
  }
}

function splice() {
  const index = parseInt(prompt("Enter index to splice:"));
  const count = parseInt(prompt("Enter number of elements to remove:"));
  if (!isNaN(index) && !isNaN(count)) {
    const removedItems = myArray.splice(index, count);
    alert("Removed items: " + removedItems);
    displayArray();
  } else {
    alert("Please enter valid numbers for splicing.");
  }
}
