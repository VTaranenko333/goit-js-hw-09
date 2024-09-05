const STORAGE_KEY = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');

loadFormData();

form.addEventListener('input', onInputChange);
form.addEventListener('submit', onFormSubmit);

function onInputChange(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();

  formData.email = form.elements.email.value.trim();
  formData.message = form.elements.message.value.trim();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  form.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData = { email: '', message: '' };
}

function loadFormData() {
  const savedData = localStorage.getItem(STORAGE_KEY);

  if (savedData) {
    formData = JSON.parse(savedData);
    form.elements.email.value = formData.email || '';
    form.elements.message.value = formData.message || '';
  }
}

const styles = `
  .feedback-form {
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    padding: 24px;
    width: 408px;
    height: auto;
  }

  .feedback-form input, 
  .feedback-form textarea {
    display: flex;
    flex-direction: column;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.04em;
    color: #2e2f42;
    border: 1px solid #808080;
    margin-bottom: 8px;
    border-radius: 4px;
    width: 360px;
    height: 40px;
  }

  .feedback-form input:hover {
    border: 1px solid #000;
    border-radius: 4px;
    width: 360px;
    height: 40px;
  }

  .feedback-form button[type="submit"] {
    align-self: start;
    border: none;
    border-radius: 8px;
    padding: 8px 16px;
    width: auto;
    height: 40px;
    background: #4e75ff;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.04em;
    color: #fff;
  }

  .feedback-form button[type="submit"]:hover {
    background: #6c8cff;
  }
`;

// Створення елемента <style>
const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = styles;

// Додаємо стилі в head
document.head.appendChild(styleSheet);
