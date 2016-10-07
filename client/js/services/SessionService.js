app.service('SessionService', function() {
   this.create = function(accessToken) {
       this.accessToken = accessToken;
   }
   this.setUser = function(user) {
       this.user  = user;
   }
   this.destroy = function() {
       this.accessToken = null;
   }
});