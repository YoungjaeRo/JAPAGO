import HTTP from 'superagent';
import express from 'express';


const app = express()
const port = 3000 // 실행할 포트 번호

//정적 리소스 호스팅 , Express의 미들웨어 기능으로 활용함
app.use(express.static('public')); // public 이라는 이름의 폴더를 정적 리소스가 제공되는 경로 적용됨

// controller 단 (localhost:3000/ 로 접속시 응답할 핸들러)
app.get('/', (req, res) => {
  res.sendFile('index.html'); //  public 안에 있는 public/index.html 파일을 응답한다.
})

// localhost:3000/detect/로 요청시 응답할 핸들러
app.post('/detect', (request, response) => {
  console.log('Post: /detect called');


  // TODO: 언어 감지 요청 처리 로직 작성예정
const DETECT_LANGUAGE_URL = 'https://naveropenapi.apigw.ntruss.com/langs/v1/dect';

const requestBody = {
    query: '안녕'
}

const CLIENT_ID = 'lwd4vv7k1c'
const CLIENT_SECRET = 'rQaWHJyZNNkEsiE84lWTfiB2WNxmkGPhKqkd6D2Y'

HTTP.post(DETECT_LANGUAGE_URL) // 보낼 주소
    .send(requestBody) // 보낼 데이터
    .set('x-ncp-apigw-api-key-id', CLIENT_ID) // 요청 헤더값 세팅
    .set('x-ncp-apigw-api-key', CLIENT_SECRET)
    .end((error, result) => { // 응답받은 결과값 취득
        if (result.statusCode === 200) {
          // 언어감지 결과 값 데이터
          const resultData = result.body;

            /// 응답 객체를 통해 클라이언트로 응답
            response.send(resultData);
        } else {
            console.error(error);
        }
    }); 
  response.send('detect!!')
}); 


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});