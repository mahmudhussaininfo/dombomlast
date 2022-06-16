
const stu_form = document.getElementById('stu_form');
const msg = document.querySelector('.msg');
const loading = document.querySelector('.loading');
const emailfield = document.querySelector('input[name ="email"]');
const passfield = document.querySelector('input[name ="password"]');
const phonefield = document.querySelector('input[name ="phone"]');
const userfield = document.querySelector('input[name ="uname"]');
const email_required = document.querySelector('.email_required');
const password_required = document.querySelector('.password_required');
const username_required = document.querySelector('.username_required');
const phone_required = document.querySelector('.phone_required');

stu_form.onsubmit = (e) =>{
    e.preventDefault();

    loading.style.display = 'block';

    let timeout = setTimeout(() => {

        loading.style.display = 'none';

        const form_data = new FormData(e.target);
        const {name, email, password, phone, uname} = Object.fromEntries(form_data.entries());
    
        if (  !name  || !email || !password || !phone || !uname ) {
    
            msg.innerHTML = setAlert('oise na');
            
            
        } else {
            
            msg.innerHTML = setAlert('oise', 'success');
            e.target.reset();
            email_required.textContent = '';
            email_required.className = '';
            password_required.textContent = '';
            password_required.className = '';
            phone_required.textContent = '';
            phone_required.className = '';
            username_required.textContent = '';
            username_required.className = '';
        }

    
        clearTimeout(timeout);
    }, 2000);

   
}

emailfield.onkeyup = (eventt) =>{
    
    let email = eventt.target.value;

    if (emailcheck(email)) {
        email_required.textContent = 'email is okay';
        email_required.className = 'text-success';
        
    } else {

        email_required.textContent = 'email is not okay';
        email_required.className = 'text-danger';   
    }
}

passfield.onkeyup = (p) =>{
    let password = p.target.value;

    if (passwordcheck(password)) {

        password_required.textContent = 'password is now okay';
        password_required.className = 'text-success';

    } else {

        password_required.textContent = 'password is not okay';
        password_required.className = 'text-danger';
        
    }
}

phonefield.onkeyup = (p) =>{

    let phone = p.target.value;

    if (phonecheck(phone)) {

        phone_required.textContent = 'phone number is okay';
        phone_required.className = 'text-success';
        
    } else {

        phone_required.textContent = 'phone number is not okay';
        phone_required.className = 'text-danger';
        
    }
}

userfield.onkeyup = (user) =>{

    let username = user.target.value;

    if (usernamecheck(username)) {

        username_required.textContent = 'username is okay';
        username_required.className = 'text-success';
        
    } else {
        username_required.textContent = 'username is not okay';
        username_required.className = 'text-danger';
    }
}