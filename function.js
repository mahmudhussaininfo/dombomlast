/**
 * Set Alert
 */

 const setAlert = (msg, type = 'danger') =>{
    return `<p class="alert alert-${type} d-flex justify-content-between">${msg}<button data-bs-dismiss = "alert" class="btn-close"></button></p>`
}

//For Email Check 

const emailcheck = (email) =>{
    let pattern = /^[a-z0-9\._]{1,}@[a-z0-9]{1,}\.[a-z]{1,6}$/;
    return pattern.test(email);
}

// BD phone Number Check 

const phonecheck = (phone) =>{
    let pattern = /^(01|\+8801)[0-9]{9}$/;
    return pattern.test(phone);

}

// Name Check

const namecheck = (namee) =>{
    let pattern = /^[a-zA-Z ]{3,}$/;
    return pattern.test(namee);
}

// UserName

const usernamecheck = (username) =>{
    let pattern = /^[a-zA-Z0-9]{6,12}$/;
    return pattern.test(username);
}

// password

const passwordcheck = (password) =>{
    let pattern = /^[a-zA-Z0-9\!@#$%^&*_+]{6,20}$/;
    return pattern.test(password);
}