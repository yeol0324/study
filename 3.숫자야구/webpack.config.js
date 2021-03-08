const path = require('path');

module.exports = {
    entry: {
        app: './main.js', //app > 하나로 합쳐질 파일의 이름 path.join(__dirname, 'app.js') 로 사용 가능
    },
    module: {//웹팩의 핵심
        rules: [{ //수백개 수천개의 자바스크립트 파일을 합칠 때 어떻게 처리할 건지 입력

        }],
    },
    plugins: [

    ],
    output: {
        filename: 'app.js', //'[name].js'로 입력해도 무관
        path: path.join(__dirname, 'dist'), //이 폴더에 js 파일이 생성됨
    }
};
//웹패킹할 때 모듈로 만들어 놓은 객체가 사용됨, 웹팩 설정 다 여기에 입력하면 됨
//웹팩을 사용하는 이유 : 스크립트가 너무 길어져서 하나로 합치기 위해서 사용