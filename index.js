var i=0,j=0,k=0,l=0;
var p1='Hi ahjumma 😘wish u many more happy returns of the day  half ticket and  first birthday🤩 enga kooda iruka and I wish this is ur best birthday six months kooda aagala but neraiya share panni iruko enoda neraiya🤫 secret therinja frnds list la neeyo onnu i think na clg la unmaiya irukanonu nenacha athu kandipa unkitta iruka irukavo seivan thanks for being a  partner  puthusa iruku ipdi wish panna ethachu thappa iruntha ignore it and I think naan tha unoda first partner clg la so maranthudatha😌 ipdiye jolly ah enga kooda oru four yrs ku enjoy pannalam aprm innonu konjo height aaga ethachu pannu 😂thats it fours yrs la neraiya memories sernthu create pannuvo yagsho 🤙🏻 and happy 18th birthday selvi (priya)and saengil chukahae ahjumma 🥳';

var p2='Happiest birthday tamil!!Have a blast year ahead .atleast this year try to grow a inch .So I have never thought that I would be this close with u if there is a time machine definitely thirumbi poi naaa unna paathadha change paniduve😂 and plsssss enime pasangala paatha dog maari pinnadi pogadha paaka mudilaa floor ku floor paaka pasangala vechiruka adhu epdi panra terilla soli kudutha enakum use aagum .Naaa laa bday apo nyabagam vechi wish panradhe periya visayam enna poi un bday ku 2days munnadi epdi polamba vitutan endha thamizh and epome ne dha vangi tharuva but still treat vechidu and once again happy birthday';
var p3="Heyyy tamizhhhh...Happy birthday ma gal!🥳🥳🥳 You are a wonderful person..And one of the sweetest I've met soo far❤️❤️❤️ I still remember the first day we met in the bus where I was with one of my frnd and how we were talking about how great u were supposed to be to get cs in counselling Little did I know that we would become sooo close🫂 as to share sooo much. From food 🥘to feeelings ❣️we have always been a part with each other. Knowingly or unknowingly we have made sooooo much memories and will sure make moree...🥰🥰 We have got a long way to go but ik it will become short as it goes☺️  U are mixture of everything just like your playlist with different genre Perfect amount of love affection care anger etc......🤗🤗  I love you the way you are and will always do 😘😘😘 🥂 cheers to our lonnnngggg way in 16b🤣🤣🤣 I again wish you a very happyyy birthday darling!!!LoveSuprajaa!"
var p4="Message perusa iruku nu padikala nu sonna konnduva😂 olunga padi. Happy Birthday my dear friend. Vazhakam pola naa solrathu lan unaku dialogue maari tha theiryum 🤦aana unakum theriyum atha unmai nu. En life la i have never thought that i would get a friend like you  and inime unna maari yaarum enaku kidaipanga nu thonala😂. Jolly ah iru eppovum ithe maari maaratha. En life enna  aanalum I will never forget you😇 . Epdi tha naa kekura Ella doubt Kum ans solriyo therla enake kadupa irukum. Ithe maari enkooda as much as you can pls stay with me and help me to get over all the struggles. Naa unta pesa aarambichi maybe 6months tha aagi irukum aana enaku romba varusham close frnds ah irka maari feel 😂. Nee evlo lucky na ennoda hidden faces kooda nee tha paathu iruka so naa ethachum torture pannalum as far as u can pogama iru 😅. Jolly ah njoy ur day🤩";
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
	if(j<p2.length)
	{
		document.getElementById('y').innerHTML += p2.charAt(j);
		j++;
		setTimeout(typewriter2,speed);
	}
}

function typewriter3()
{
	if(k<p3.length)
	{
		document.getElementById('s').innerHTML += p3.charAt(k);
		k++;
		setTimeout(typewriter3,speed);
	}
}

function typewriter4()
{
	if(l<p4.length)
	{
		document.getElementById('me').innerHTML += p4.charAt(l);
		l++;
		setTimeout(typewriter4,speed);
	}
}

function navigate()
{
	var uname=document.getElementById('username').value
	var pd=document.getElementById('password').value
	if(uname=='birthday' && pd=='Priyav')
	{
		window.location.href="./index1.html";
	}
	else
	{
		window.alert('Please enter valid credentials');
	}
	uname.innerHTML=""
;}