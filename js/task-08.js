document.querySelector('.login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const formDataObject = {};

 formData.forEach((value, key) => {
    formDataObject[key] = value;
 });
if (formDataObject.email === '' || formDataObject.password === '') {
    alert('Будь ласка, заповніть всі поля');
    return;
}
    console.log(formDataObject);
    form.reset();
    });