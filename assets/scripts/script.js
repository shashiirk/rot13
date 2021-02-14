const inputArea = document.querySelector('.input-area');
const outputArea = document.querySelector('.output-area');

// Returns a ROT13 encoded/decoded string
function rot13(str) {
  // To store encoded/decoded characters
  const codedStringArray = [];
  [...str].forEach((value) => {
    // If value is an alphabetic character decode it
    if ((value >= 'A' && value <= 'Z') || (value >= 'a' && value <= 'z')) {
      // For capital letters
      if (value >= 'A' && value <= 'Z') {
        if (value < 'N') {
          codedStringArray.push(String.fromCharCode(value.charCodeAt(0) + 13));
        } else {
          codedStringArray.push(
            String.fromCharCode(64 + (value.charCodeAt(0) + 13) - 90)
          );
        }
      }
      // For small letters
      else {
        if (value < 'n') {
          codedStringArray.push(String.fromCharCode(value.charCodeAt(0) + 13));
        } else {
          codedStringArray.push(
            String.fromCharCode(96 + (value.charCodeAt(0) + 13) - 122)
          );
        }
      }
    } else {
      // Push non-alphabetic character as it is
      codedStringArray.push(value);
    }
  });

  // Converts array to string and returns it
  return codedStringArray.join('');
}

// Scroll to the bottom of outputArea
function scrollToBottom() {
  outputArea.scrollTop = outputArea.scrollHeight;
}

// Generate result from input
function inputHandler() {
  outputArea.innerText = rot13(inputArea.value);
  scrollToBottom();
}

// Listen to input event on inputArea
inputArea.addEventListener('input', inputHandler);
