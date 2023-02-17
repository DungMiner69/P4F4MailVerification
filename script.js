function checkCode() {
    // Get the value entered by the user
    var enteredCode = document.getElementById("codeInput").value;

    // Check if the entered code matches the verification code
    if (enteredCode == "881234") {
        // If the codes match, display the message
        alert("Tụi bây đang làm gì vậy?");
    } else {
        // If the codes don't match, display an error message
        alert("Nhập cho đúng coi😣");
    }
}