module.exports = function (userContext, events, done) {
    
    userContext.vars.postTitle = 'Weather Report ' + Date.now();
    return done();
  };
  