 
  
export default function valid () {
    
      function valid() {
          const input = document.getElementsByTagName('input');
          const textArea = document.getElementsByTagName('textarea');
          let jsValidTextArea;
          let continueFlag = false;
        //   console.log('hi')
          // ==================== ClassList

          function addClassName(form) {
              const errorDiv = document.createElement('div');
              let counter = 0;
              form.classList.add('js-valid')
              errorDiv.classList.add('error');
              form.insertBefore(errorDiv, form.children[0])

              if (form.classList.contains('js-valid')) {
                  for (let i = 0; i < input.length; i++) {
                      const inpAttr = input[i].getAttribute('type');
                      if (inpAttr === 'text') {
                          input[i].classList.add('js-valid-text')
                      } else if (inpAttr === "checkbox") {
                          input[i].classList.add('js-valid-checkbox')
                      } else if (inpAttr === 'radio') {
                          input[i].classList.add('js-valid-radio')
                      } else if (inpAttr === 'email') {
                          input[i].classList.add('js-valid-email')
                      } else if (inpAttr === 'password') {
                          input[i].classList.add('js-valid-password')
                      } else if (inpAttr === 'submit') {
                          input[i].classList.add('js-valid-submit')
                      } else if (inpAttr === 'reset') {
                          input[i].classList.add('js-valid-reset')
                      }
                  }
                  for (let i = 0; i < textArea.length; i++) {
                      jsValidTextArea = textArea[i]
                      jsValidTextArea.classList.add('js-valid-textarea');
                  }
              }
          }

          // ==================== Reset style for button

          function resetBorder() {
              const resetBut = document.querySelector('.js-valid-reset');
              const subBut = document.querySelector('.js-valid-submit');
              resetBut.removeAttribute('style');
              subBut.removeAttribute('style');
          }

          // ==================== Reset style for valid

          function resetBorderComplete(inp) {
              inp.removeAttribute('style');
          }

          // ==================== Reset All style for complete valid

          function reset() {
              const errorMess = document.querySelector('.error');
              for (let i = 0; i < input.length; i++) {
                  const inpAttr = input[i].getAttribute('type')
                  if (inpAttr === 'text' || inpAttr === 'password' || inpAttr === 'email') {
                      input[i].removeAttribute('style')
                      input[i].value = ''
                  }
              }
              errorMess.textContent = "";
              if (jsValidTextArea) {
                  jsValidTextArea.removeAttribute('style')
              }
          }

          // ==================== Validation

          function validation() {
              const emailPattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
              const error = document.querySelector('.error');
              const errorMessage = {
                  notText: 'Все поля должны быть заполнены',
                  notCheck: 'Поставьте галочку, если вы - не робот',
                  lengthPass: 'Пароль должен содержать не мение трех символов',
                  invEmail: 'Неверный формат e-mail',
                  notShure: 'Выберите правильный ответ на вопрос',
                  serverError: {
                      invUserName: 'Неверное имя пользователя или пароль'
                  }
              }
              // ==================== Output error message

              function errorValid(inp, errorMes) {
                  const redBorder = inp.style.border = '1px solid red';
                  redBorder;
                  error.textContent = errorMes;
              }
              // ==================== Validation content value

              function validValue() {
                  for (let i = 0; i < input.length; i++) {
                      if (input[i].classList.contains('js-valid-email')) {
                          if (emailPattern.test(input[i].value) === false) {
                              errorValid(input[i], errorMessage.invEmail)
                              continueFlag = false;
                          } else {
                              continueFlag = true;
                              resetBorderComplete(input[i])
                          }
                      }
                      if (input[i].classList.contains('js-valid-password')) {
                          if (input[i].value.length < 4) {
                              errorValid(input[i], errorMessage.lengthPass);
                              continueFlag = false;
                          } else {
                              continueFlag = true
                              resetBorderComplete(input[i])
                          }
                      }
                  }
              }

              // ==================== Validation TeaxArea form

              function validTexArea() {
                  if (jsValidTextArea.classList.contains('js-valid-textarea')) {
                      if (jsValidTextArea.value === "" || jsValidTextArea.value === " ") {
                          errorValid(jsValidTextArea, errorMessage.notText)
                          continueFlag = false;
                      } else {
                          continueFlag = true;
                          resetBorderComplete(jsValidTextArea);
                      }
                  }
              };

              // ==================== Init validation texarea

              if (jsValidTextArea) {
                  validTexArea();
              }

              // ==================== Validation null string

              for (let i = 0; i < input.length; i++) {
                  const inpClass = input[i].classList;
                  if (inpClass.contains('js-valid-text') || inpClass.contains('js-valid-password') || inpClass.contains('js-valid-email')) {
                      if (input[i].value === '' || input[i].value === " ") {
                          errorValid(input[i], errorMessage.notText)
                          continueFlag = false;
                      } else {
                          continueFlag = true;
                          resetBorderComplete(input[i])
                          validValue();
                      }
                      resetBorder();
                  }
              }


              for (let i = 0; i < input.length; i++) {
                  const inpClass = input[i].classList;
                  if (inpClass.contains('js-valid-radio'))  {
                      if (input[i].value === "no") {
                          errorValid(input[i], errorMessage.notShure)
                          continueFlag = false;
                      } 
                      else  {
                          continueFlag = true;
                          resetBorderComplete(input[i])
                          validValue();
                      }
                      resetBorder();
                  }
              }
// ---------------Validation checkbox

              for (let i = 0; i < input.length; i++) {
                  const inpClass = input[i].classList;
                  if (inpClass.contains('js-valid-checkbox') ) {
                      if (input[i].type == 'checkbox' && input[i].checked == false)      {
                          errorValid(input[i], errorMessage.notCheck)
                          continueFlag = false;
                      } else {
                          continueFlag = true;
                          resetBorderComplete(input[i])
                          validValue();
                      }
                      resetBorder();
                  }
              }
              // ==================== Start query for server

              if (continueFlag === true) {
                  queryAjax();
              }
          }
          // ==================== Query for server

          function queryAjax() {
              console.log('Посылаю запрос принимай')
          }

          return {
              // ==================== Valid plugin init  
              validInit(container) {
                  const form = document.querySelector(container)
                  addClassName(form);
                  const resetB = document.querySelector('.js-valid-reset')
                  form.addEventListener('submit', (e) => {
                      e.preventDefault();
                      validation();
                  })
                  resetB.addEventListener('click', reset)
              }
          }

      }

      const validator = valid()

      validator.validInit('.form');

}