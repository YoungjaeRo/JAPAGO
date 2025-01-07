// 설치한 superagent 모듈 improt
import HTTP from 'superagent';

// 언어 감지 API 요청-응답 테스트

// API 서버의 엔드포인트(URL)
const Translate_URL = 'https://naveropenapi.apigw.ntruss.com/nmt/v1/translation';

const requestBody = {
    source: 'ko',
    target: 'ja',
    text: '안녕 내이름은 노영재야',
}

const CLIENT_ID = 'lwd4vv7k1c'
const CLIENT_SECRET = 'rQaWHJyZNNkEsiE84lWTfiB2WNxmkGPhKqkd6D2Y'

HTTP.post(Translate_URL) // 보낼 주소
    .send(requestBody) // 보낼 데이터
    .set('x-ncp-apigw-api-key-id', CLIENT_ID) // 요청 헤더값 세팅
    .set('x-ncp-apigw-api-key', CLIENT_SECRET)
    .end((error, result) => { // 응답받은 결과값 취득
        if (result.statusCode === 200) {
            console.log(result.body);
        } else {
            console.error(error);
        }
    }); 