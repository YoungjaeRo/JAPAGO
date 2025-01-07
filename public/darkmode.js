//darkmode 토글 버튼 가져오기
const checkbox = document.getElementById('checkbox');

//dark라는 접두사 활성화 <html class = 'dark'>와 같이 적용해야함

// 화이트 모드일때는 html, 다크모들 일때는 html class = 'dark'
const html = document.querySelector('html')

// checkbox가 체크되면 다크모드 활성화
checkbox.addEventListener('click', () => {
  checkbox.checked? html.classList.add('dark') : html.classList.remove('dark');
})