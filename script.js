//Email validation function
function validateEmail(inputText) {
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.value.match(mailFormat)) {
        document.form1.emailAddr.focus();
        alert("Welcome, We will keep you posted");
        return true;
    } else
    alert("Please provide a valid email");
    document.form1.emailAddr.focus();
    return false;
}