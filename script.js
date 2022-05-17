const mainForm = document.forms.main;
const mainFormInput_fnm = mainForm.fnm;
mainFormInput_fnm.addEventListener("input", function (event) {
    let value_fnm = mainFormInput_fnm.value;
    //console.log(value_fnm);
    if(value_fnm.length < 11 || /\d/.test(value_fnm)){
        er("fnm");
    }
    else{
        noter("fnm");
    }
});
const mainFormInput_ID_card = mainForm.ID_card;
mainFormInput_ID_card.addEventListener("input", function (event) {
    let value_ID_card = mainFormInput_ID_card.value;
    //console.log(value_ID_card);
    if(value_ID_card.length != 10 || !(/[А-Я][А-Я]\s[№]\d{6}/.test(value_ID_card))){
        er("ID_card");
    }
    else{
        noter("ID_card");
    }
});
const mainFormInput_Birthday = mainForm.Birthday;
mainFormInput_Birthday.addEventListener("input", function (event) {
    let value_Birthday = mainFormInput_Birthday.value;
    //console.log(value_Birthday);
    if(value_Birthday == ''){
        er("Birthday");
    }
    else{
        noter("Birthday");
    }
});
const mainFormInput_Address = mainForm.Address;
mainFormInput_Address.addEventListener("input", function (event) {
    let value_Address = mainFormInput_Address.value;
    //console.log(value_Address);
    if(value_Address == '' || !(/[м]\.\s[А-Я]/.test(value_Address))){
        er("Address");
    }
    else{
        noter("Address");
    }
});
const mainFormInput_email = mainForm.email;
mainFormInput_email.addEventListener("input", function (event) {
    let value_email = mainFormInput_email.value;
    //console.log(value_email);
    if((value_email == '') || (value_email.length < 6) || !(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(value_email))){
        er("email");
    }
    else{
        noter("email");
    }
});
function noter(name){
    document.getElementsByName(name)[0].style.borderColor = "#008000";
}
function er(name){
    document.getElementsByName(name)[0].style.borderColor = "#FF0000";
}
function Formdata(data){
    if (data.fnm.value.length < 11 || /\d/.test(data.fnm.value)){
        alert('Поле "ПІБ" заповнено некоректно');
        return false;
    }
    else if (data.ID_card.value.length != 10 || !(/[А-Я][А-Я]\s[№]\d{6}/.test(data.ID_card.value))){
        alert('Поле "ID_card" заповнено некоректно');
        return false;
    }
    else if (data.Birthday.value == ''){
        alert('Поле "Birthday" заповнено некоректно');
        return false;
    }
    else if (data.Address.value == '' || !(/[м]\.\s[А-Я]/.test(data.Address.value))){
        alert('Поле "Address" заповнено некоректно');
        return false;
    }
    else if(data.email.value == '' || data.email.value.length < 6 || !(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(data.email.value))){
        alert('Поле "Email" заповнено некоректно');
        return false;
    }
    else{
        let datafnm = data.fnm.value;
        let dataID_card = data.ID_card.value;
        let dataBirthday = data.Birthday.value;
        let dataAddress = data.Address.value;
        let dataemail = data.email.value;
        alert(`ПІБ: ${datafnm}\nID_card: ${dataID_card}\nДень народження: ${dataBirthday}\nАдреса: ${dataAddress}\nemail: ${dataemail}\n`);
    }
}