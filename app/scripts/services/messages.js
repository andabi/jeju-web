angular.module('webApp')
  .factory('Messages', function ($resource) {
    var ret = {};
    var msgResource = $resource('http://asia.bigeye.me:9000/message/', {}, {
    //var msgResource = $resource('http://localhost:\\9000/message/', {}, {
        'save': {method: 'POST', headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}},
        'query': {method:'GET', headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}, isArray:true}
      }
    );
    var lasttime = undefined;

    ret.getNewMsg = function (success, fail) {
        //var data = [{writer:'AAA', content:'Congratulations!', date:Date()}];
        var data = [];

        if (lasttime === undefined) {
            msgResource.query({}, function(data) {
                if (data.length != 0) {
                    var d = new Date();
                    lasttime = d.toISOString();
                    data.$save();
                    console.log(lasttime);
                }
                console.log(data);
                //2015-03-14T23:23:29%2B09:00
            }, fail
            );
        }
        else
            data = msgResource.query({after:lasttime}, success, fail);

        success(data);
        return data;
    };

    ret.getMsgFromID = function (id, success, fail) {
        var msgList = msgResource.get({id:id},
                success, fail);
        return msgList;
    };

    ret.getAllMsgFromID = function (startId, success, fail) {
        startId = (startId === undefined) ? '' : startId;
        var data = msgResource.query({startId:startId, limit:10},
                success, fail);
        data = [{writer:'AAA', content:'Congratulations!', date:'150301'},
             {writer:'BBB', content:'Wow Congratulations!', date:'150302'},
             {writer:'AAA', content:'Congratulations!', date:'150301'},
             {writer:'BBB', content:'Wow Congratulations!', date:'150302'},
             {writer:'BBB', content:'Wow Congratulations!', date:'150302'},
             {writer:'AAA', content:'Congratulations!', date:'150301'}
        ];
        return data;
    };

    ret.sendMsg = function(writer, content, success, fail) {
        msgResource.save({writer:writer, content:content}, {},
                success, fail
                );
    };

    return ret;
  }
);
