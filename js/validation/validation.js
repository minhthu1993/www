const TYPE = {
    EMPTY : "CHECK_EMPTY",
    TAI_KHOAN : "CHECK_TAI_KHOAN",
    NAMME : "CHECK_NAME",
    EMAIL : "CHECK_EMAIL",
    PASSWORD : "CHECK_PASSWORD",
    DATE: "CHECK_DATE",
    LUONG : "CHECK_LUONG",
    CHUC_VU : "CHECK_CHUC_VU",
    GIO_LAM : "CHECK_GIO_LAM"
}

function checkValidation(idInput, idNoti, type) {
    const valueInput = document.getElementById(idInput).value;
    document.getElementById(idNoti).innerHTML = '';
    switch(type) {
        case TYPE.EMPTY :
            return checkInputEmpty(idNoti, valueInput);
            break;
        case TYPE.TAI_KHOAN : 
            return checkInputTaiKhoan(idNoti, valueInput);
            break;
        case TYPE.NAMME : 
            return checkInputName(idNoti, valueInput);
            break;
        case TYPE.EMAIL : 
            return checkInputEmail(idNoti, valueInput);
            break;
        case TYPE.PASSWORD : 
            return checkInputPassword(idNoti, valueInput);
            break;
        case TYPE.LUONG : 
            return checkInputLuong(idNoti, valueInput);
            break;
        case TYPE.GIO_LAM : 
            return checkInputGioLam(idNoti, valueInput);
            break;
    }
}

function checkInputEmpty(idNoti, valueInput) {
    if (valueInput == '') {
        document.getElementById(idNoti).style.display = "inline-block";
        document.getElementById(idNoti).innerHTML = 'Vui lòng không để trống';
        return false;
      }
      return true;
}

function checkInputTaiKhoan(idNoti, valueInput) {
    console.warn(idNoti)
    if(valueInput.length < 4 || valueInput.length > 6) {
        document.getElementById(idNoti).style.display = "inline-block";
        document.getElementById(idNoti).innerHTML = 'Từ 4 - 6 ký tự';
        return false;
    }
    return true;
}

function checkInputName(idNoti, valueInput) {
    const regex = /^[\p{L}]+(?: [\p{L}]+)*$/u;
    console.warn(regex.test(valueInput), idNoti)
    if(!regex.test(valueInput)) {
        document.getElementById(idNoti).style.display = "inline-block";
        document.getElementById(idNoti).innerHTML = 'Tên nhân viên phải là chữ và không nhiều khoảng cách';
        return false;
    }
    return true;
}

function checkInputEmail(idNoti, valueInput) {
    const regex =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    console.warn(regex.test(valueInput), idNoti)
    if(!regex.test(valueInput)) {
        document.getElementById(idNoti).style.display = "inline-block";
        document.getElementById(idNoti).innerHTML = 'Email không đúng định dạng';
        return false;
    }
    return true;
}

function checkInputPassword(idNoti, valueInput) {
    const regex = /^(?=.*\d)(?=.*[A-Z])(?=.*\W).{6,10}$/;
    console.warn(regex.test(valueInput), idNoti)
    if(!regex.test(valueInput)) {
        document.getElementById(idNoti).style.display = "inline-block";
        document.getElementById(idNoti).innerHTML = 'Từ 6-10 ký tự, chứa 1 số, 1 chữ in hoa, 1 ký tự đặc biệt';
        return false;
    }
    return true;
}

function checkInputLuong(idNoti, valueInput) {
    const regex = /^[0-9]+$/;
    console.warn(regex.test(valueInput), idNoti)
    if(!regex.test(valueInput)) {
        document.getElementById(idNoti).style.display = "inline-block";
        document.getElementById(idNoti).innerHTML = 'Vui lòng nhập số';
        return false;
    }
    if(valueInput < 1000000 || valueInput > 20000000){
        document.getElementById(idNoti).style.display = "inline-block";
        document.getElementById(idNoti).innerHTML = 'Lương cơ bản từ 1,000,000 - 20,000,000';
        return false;
    }
    return true;
}

function checkInputGioLam(idNoti, valueInput) {
    const regex = /^[0-9]+$/;
    console.warn(regex.test(valueInput), idNoti)
    if(!regex.test(valueInput)) {
        document.getElementById(idNoti).style.display = "inline-block";
        document.getElementById(idNoti).innerHTML = 'Vui lòng nhập số';
        return false;
    }
    if(valueInput < 80 || valueInput > 200){
        document.getElementById(idNoti).style.display = "inline-block";
        document.getElementById(idNoti).innerHTML = 'Số giờ trong tháng từ 80 - 200';
        return false;
    }
    return true;
}