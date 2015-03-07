angular.module('webApp')
  .factory('Messages', function ($resource) {
    var ret = {};
    var msgResource = $resource('/message/:id'
    );

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
        {writer:'BBB', content:'Wow Congratulations!', date:'150302'}
      ];
      return data;
    };

    ret.sendMsg = function(writer, content, success, fail) {
      msgResource.save({writer:writer, content:content},
                       success, fail
      );
    };

    return ret;
  }
);
