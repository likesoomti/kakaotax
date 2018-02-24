var express = require('express');
var router = express.Router();
const api = require('../api');

/* GET home page. */
router.get('/keyboard', (req, res) => {
  const menu = {
      type: 'buttons',
      buttons: ["메뉴1", "메뉴2", "메뉴3"]
  };
  res.set({
      'content-type': 'application/json'
  }).send(JSON.stringify(menu));
});


router.post('/message',function (req, res) {

  const _obj = {
      user_key: req.body.user_key,
      type: req.body.type,
      content: req.body.content
  };

  var test = "" + req.body.user_key + req.body.type + req.body.content;


  //안녕이라고 입력되었다면...
  if(_obj.content == '안녕')
  {
    //"안녕"이라고 메시지 보내고
    //'누구니' '메롱' 버튼 보여줌
    let massage = {
        "message": {
            "text": test
        },
        "keyboard": {
            "type": "buttons",
            "buttons": [
                "누구니",
                "메롱"
            ]
        }
    };

    //      카톡으로 전송
    res.set({
        'content-type': 'application/json'
    }).send(JSON.stringify(massage));
  }
  //메롱이라고 입력되었다면
  else if(_obj.content == '메롱')
  {
    //"죽는다."이라고 메시지 보내고
    //'안녕' '누구니' 버튼 보여줌
    let massage = {
        "message": {
            "text": '죽는다.'
        },
        "keyboard": {
            "type": "buttons",
            "buttons": [
                "안녕",
                "누구니"
            ]
        }
    };
    res.set({
        'content-type': 'application/json'
    }).send(JSON.stringify(massage));
  }
  else if(_obj.content == '누구니')
  {
    let massage = {
        "message": {
            "text": '난 제니스'
        },
        "keyboard": {
            "type": "buttons",
            "buttons": [
                "안녕",
                "메롱"
            ]
        }
    };
    res.set({
        'content-type': 'application/json'
    }).send(JSON.stringify(massage));
  }
  //예외 처리...
  //하지만 현재는 버튼 방식이기에 이 루틴을 탈 수가 없다.
  else {
      let massage = {
          "message": {
              "text": '못 알아 먹었다...'
          },
          "keyboard": {
              "type": "buttons",
              "buttons": [
                  "안녕",
                  "메롱",
                  "누구니"
              ]
          }
      };
      res.set({
          'content-type': 'application/json'
      }).send(JSON.stringify(massage));
  }
});

module.exports = router;
