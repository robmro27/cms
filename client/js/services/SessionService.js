app.service('SessionService', function() {
   this.create = function(user) {
       this.user  = user;
   }
   this.destroy = function() {
       this.accessToken = null;
   }
});