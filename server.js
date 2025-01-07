// express 모듈을 활용하여 간단한 백엔드 서버 구성
const express = require('express')

// app : express 모듈을 활용할 수 있는 객체
// app 객체에 서버와 관련된 설정들을 적용할 수 있음
const app = express()
const port = 3000 // 실행할 포트 번호

// controller 단
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// 실행될 Node.js 프로세스가 몇번 포트에서 사용자의 요청을 대기하고 있을 것인지?
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})