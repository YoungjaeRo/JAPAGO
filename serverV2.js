const express = require('express') // express 라는 프레임워크를 사용함함

const app = express()
const port = 3000 // 실행할 포트 번호

//정적 리소스 호스팅 , Express의 미들웨어 기능으로 활용함
app.use(express.static('public')); // public 이라는 이름의 폴더를 정적 리소스가 제공되는 경로 적용됨

// controller 단 (localhost:3000/ 로 접속시 응답할 핸들러)
app.get('/', (req, res) => {
  res.sendFile('index.html'); //  public 안에 있는 public/index.html 파일을 응답한다.
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});