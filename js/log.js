// login validation...

function validateLog() {
  if (document.login.email.value == "") {
    alert("Please provide your email ! ");
    document.login.email.focus();
    return false;
  }
  if (document.login.password.value == "") {
    alert("Please provide your password ! ");
    document.login.password.focus();
    return false;
  }
}

// Register validation...

function validateRegister() {
  if (document.register.name.value == "") {
    alert("Please provide your name ! ");
    document.register.name.focus();
    return false;
  }
  if (document.register.email.value == "") {
    alert("Please provide your email ! ");
    document.register.email.focus();
    return false;
  }
  if (document.register.contact.value == "") {
    alert("Please provide your contact ! ");
    document.register.contact.focus();
    return false;
  }
  if (document.register.password.value == "") {
    alert("Please provide your password ! ");
    document.register.password.focus();
    return false;
  }
}
