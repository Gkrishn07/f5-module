function submitForm() {
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let mail = document.getElementById('mail').value;
    let reson = document.getElementById('reson').value;
    console.log(fname, lname, mail, reson);
    if (fname != null && lname != null && mail != null && reson != null) {
         alert("Form submitted successfully!")
    } else {
        alert("All fields are required!")
    }
}