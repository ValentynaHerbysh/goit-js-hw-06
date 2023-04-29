const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const mail = formElements.email.value;
    const password = formElements.password.value;

    // const formData = new FormData(event.currentTarget);

    // formData.forEach((value, name) => {
    //     console.log('onFormSubmit -> value', value);
    //     console.log('onFormSubmit -> name', name);
    // })
    
    if (!mail || !password) {
    alert("Все поля должны быть заполнены!");
    return;
  }
 console.log({mail, password});
  alert("Данные отправлены");
  form.reset();
}
