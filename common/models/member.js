'use strict';

module.exports = function(Member) {
    // on login set access_token cookie with same ttl as loopback's accessToken
Member.afterRemote('login', function setLoginCookie(context, accessToken, next) {  
    var res = context.res;
    var req = context.req;
    if (accessToken != null) {
        if (accessToken.id != null) {
            res.cookie('access_token', accessToken.id, {
                signed: req.signedCookies ? true : false,
                maxAge: 1000 * accessToken.ttl
            });
            return res.redirect('/#/ForumMain');
        }
    }
    return next();
});

};
