Router.route('/', function () {
  this.render('home');
});

Router.route('/register', function () {
  this.render('register');
});

Router.route('/login', function () {
  this.render('login');
});

