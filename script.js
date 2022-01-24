document.querySelector('.card-number').oninput = () =>{
  document.querySelector('.oncard-cardnumb').innerText = document.querySelector('.card-number').value;
  }

  document.querySelector('.card-holder-name').oninput = () =>{
  document.querySelector('.oncard-holder-name').innerText = document.querySelector('.card-holder-name').value;
  }

  document.querySelector('.expi-month').oninput = () =>{
  document.querySelector('.exp-month').innerText = document.querySelector('.expi-month').value;
  }

  document.querySelector('.expi-year').oninput = () =>{
  document.querySelector('.exp-year').innerText = document.querySelector('.expi-year').value;
  }

  document.querySelector('.card-CVV').oninput = () =>{
  document.querySelector('.cvv-box').innerText = document.querySelector('.card-CVV').value;
  }

// document.querySelector('.cvv-input').onmouseenter = () =>{
//   document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
//   document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
// }

// document.querySelector('.cvv-input').onmouseleave = () =>{
//   document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
//   document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
// }

