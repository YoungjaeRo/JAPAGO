/**
 * source ~ : 번역할 텍스트, 번역할 언어의 타임(ko, ja)
 * target : 번역된 결과 텍스트
 */

const[sourceSelect, targetSelect] = document.getElementsByTagName('select');
const[sourceTextArea, targetTextArea] = document.getElementsByTagName('textarea');


sourceTextArea.addEventListener('input', (event) => {

  setTimeout(() => {
    console.log(event.target.value); // textarea에 입력한 값
  }, 2000) // 2초 후에 출력력
});


