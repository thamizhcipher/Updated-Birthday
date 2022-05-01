var i=0
var p1='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, tenetur. Neque commodi, hic eos maiores? Eaque earum doloribus atque, a molestias saepe, ut voluptatibus iure, pariatur reprehenderit, eum explicabo odio quidem delectus unde numquam quaerat! Deleniti fugiat atque quae suscipit ab. Amet quod illum recusandae, officia, eius mollitia. Deleniti, quia.';

var p2='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, tenetur. Neque commodi, hic eos maiores? Eaque earum doloribus atque, a molestias saepe, ut voluptatibus iure, pariatur reprehenderit, eum explicabo odio quidem delectus unde numquam quaerat! Deleniti fugiat atque quae suscipit ab. Amet quod illum recusandae, officia, eius mollitia. Deleniti, quia.';
var p4="good souls are made to met anddofdf d dskmvnskdvc dscnsdkn sjvhsdjvvb vcsjvcbsdcsdnc sdjv";
var speed=70;

function typewriter1()
{
	if(i<p1.length)
	{
		document.getElementById('vai').innerHTML += p1.charAt(i);
		i++;
		setTimeout(typewriter1,speed);
	}
}

function typewriter2()
{
	if(i<p2.length)
	{
		document.getElementById('bus').innerHTML += p2.charAt(i);
		i++;
		setTimeout(typewriter2,speed);
	}
}

function typewriter3()
{
	if(i<p3.length)
	{
		document.getElementById('y').innerHTML += p3.charAt(i);
		i++;
		setTimeout(typewriter3,speed);
	}
}

function typewriter4()
{
	if(i<p4.length)
	{
		document.getElementById('me').innerHTML += p4.charAt(i);
		i++;
		setTimeout(typewriter4,speed);
	}
}

function validate()
{
	if(document.getElementById('password').value=='harish')
	{
		typewriter4();
	}
	else
	{
		alert('wrong password');
		return false;
	}
}

function navigate()
{
	var uname=document.getElementById('username').value
	var pd=document.getElementById('password').value
	if(uname=='1234' && pd=='1234')
	{
		window.location.href="./index1.html";
	}
	else
	{
		window.alert('Please enter valid credentials');
	}
	uname="";
	pd="";
}
