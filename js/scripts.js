const form = document.getElementById('form');

const inputs = document.querySelectorAll('.form__field');

const emailRegex = /^(([^<>()\[\]\\.,:\s@*]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const validateForm = () => {
    inputs.forEach(input => {
        if (input.firstElementChild.value.trim() === ''){
            if (
                input.firstElementChild.name==='email' && !emailRegex.test(input.firstElementChild.value)
                ){
                    input.classList.add('form__field--error');
                }
            input.classList.add('form__field--error');
        } else {
            input.classList.remove('form__field--error');
        }
    });
};

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    validateForm();
});