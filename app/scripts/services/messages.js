angular.module('webApp')
  .factory('Messages', function ($resource) {
    var ret = {};
    var msgResource = $resource('http://asia.bigeye.me:9000/message/', {}, {
    //var msgResource = $resource('http://localhost:\\9000/message/', {}, {
        'save': {method: 'POST', headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}},
        'query': {method:'GET', headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}, isArray:true}
      }
    );

    ret.getNewMsgPromise = function(lastTime) {
      var param = (lastTime) ? {after:lastTime} : {};
      return msgResource.query(param).$promise
    };

    ret.sendMsg = function(writer, content, success, fail) {
        msgResource.save({writer:writer, content:content}, {},
                success, fail
                );
    };

    return ret;
  }
);
