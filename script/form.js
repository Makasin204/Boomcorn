let naMe = document.getElementById(`name`);
let adress = document.getElementById(`adress`);
let tel = document.getElementById(`tel`);
let email = document.getElementById(`email`);
let letter = document.getElementById(`letter`);

function submitForm () {
    console.log(`Name: `, naMe.value);
    console.log(`Adress: `, adress.value);
    console.log(`Tel: `, tel.value);
    console.log(`Email: `, email.value);
    console.log(`Message: `, letter.value);
}





/*
<input type="text" id="name" name="name" placeholder="Прізвище Ім’я По-батькові" required>
<input type="text" id="adress" name="adress" placeholder="Адреса" required>
<input type="tel" id="tel" name="tel" placeholder="Телефон" required>
<input type="email" id="email" name="email" placeholder="E-mail" required>
<textarea type="" id="letter" name="letter" placeholder="Ваше повідомлення..." maxlength="204"></textarea>
<button type="submit" class="button">Надіслати</button>
*/