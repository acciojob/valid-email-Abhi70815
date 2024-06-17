function validEmail(str) {
  //your JS code here.
	  // Define the regular expression pattern for a valid email address
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,3}$/;
  // Test the input string against the pattern
  return emailPattern.test(str);
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
