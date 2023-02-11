
var abc=["Laal dupatta udd gya re hawa ke jokhe se,_Mujhko Papa ne dekh liya Mara dande se😅","Bantai tera to banta hi nhi hai,_tujhpe kuch bhi jamta hi nhi hai😂","Mai har test pass krke dikhaunga chahe ye mera blood test hi kyon na ho😂","हाय नी तेरी लाल चुनरिया_पहन के लगदी तू कमाल_ओ तेरा क्या कहना_ओ तेरा क्या कहना😘","Gaadi wala aaya,_Ghar se kachra nikal!😂","Bol Bhidu kya kaam hai?","Swagat nhi kroge hamara?","Mere baare mein mat socho,_dil mein aata hoon samajh mein nhi😉","Aeyyyihhh!!! kyon thak rha hai?","Iss baar angrezi mein mujhko Barack Obama bhi fail nhi kr sakta😅","Mai to nanha sa pyaara sa bacha hoon🥺","Acha hai Bahut Acha hai!","Don't angry me!","Yeh Babu rao ka style hai!","Aree baba wrong no. hai to uthati kyon hai","Naam to kamal che...._par surname bawal che😏","Ye haath hai ya hathoda,_kido ki basti mein aa gya makoda😂","tension lene ka nahi_dene ka re😅","chalti kya nau se egyarahh😉","Mauka hai, dastoor hai ..._zakhaas raja,_zakhaas rani aur raazi ... kyun na laga de_Bollywood ki baazi","Tu Munna Bhai hoga lekin main Circuit nahi hoon ..._tu Batman hoga lekin main Birdman nahi hoon ..._tu hero hoga lekin ab main bhi hero hoon😂","Tu ladki ke peeche bhagega,_ladki paise ke peeche bhagegi ..._tu paise ke peeche bhagega,_ladki mere peeche bhagegi🤷","Oh ji jhappiyan tak te theek hai ..._par pappiyan bhi marte rhende hai mainu💁","Ye firauti ke paise hain ya_maiyyat ka chanda😂","Kaun bhauk rha hai ye badtameez😏","Kauwa kitna bhi washing machine mein nha le bagula nhi banta😂","Bhabhi hogi teri aur_shaadi hogi meri😉","Paan me pudina dekha,_naak ka nagina dekha,_chikni chameli dekhi,_chikna kamina dekha,_chaand cheater hoke cheat kiya toh,_Saare taare bole gilli gilli akha.😂","Ladki kamaal re akhiyon se goli maare😉","rehen de bette😏","rehen de chotte😏","Daya kuch to gadbad hai🤔","Daya Darwaja tod🤨","Chaand taare tod laun,_saari duniya par main chaun,_bas itna sa khwaab hai😅","Tune maari entry yaar,_dil mein baji ghanti yaar,_Tann Tann Tann😂","Gulaabi aankhein jo teri dekhi,_sharaabi ye dil ho gya😍","Tera Pyaar pyaar pyaar hukah baar🤐","Love You❤️"]
var hi=["hello 😘😘🥰","hello 😅😅","hello 😆🤣😂","Hello, Tell me something about you","Hello Darling♥️","Hi 😂","Hello🤣"]
var no=["no problem","Koi gal ni oye!","koi nhi","Thik hai"]
var what=["Nothing🤣","Nothing","Kuch nhi😂","Kuch nhi oye!","Kya 'what' ek baar mein sunne ki aadat daal le😏"]
function rand(len){
 let num = Math.floor(Math.random()*len);
 return num;
}
var nme=["Pikachu(you must...","The Vinayak Pand...","🎀Miss Angelic🎀","Vιπαγακ Θπιmαηι...","Ɗeⱥᖙpͥooͣlͫﾂ","Anshika🎵🎶(Inac...","✨Tuktuk.💞...","Amardeep kesha..."];
var ids=[18608933,17826737,18308477,15117771,14154819,18653347,18483801,9151475];




function g(){
var list=document.getElementById("list");
var text=document.getElementById("a");
if(text.value==""||text.value==" "){

}else{
var typing=document.getElementById("typing");
typing.innerHTML='Typing...';
setTimeout(function(){
typing.innerHTML='online';

var a=document.createElement("p");
  a.id="me";
  a.style.marginLeft="150px";
    var mess=a.textContent=text.value;
 mess=mess.toLowerCase();
 
   list.appendChild(a);
   
   var b=document.createElement("p");
   b.id="he";
   b.style.marginLeft="0px";
   
   if(mess==("hi") || mess.match("hello"))
   {
       b.textContent=hi[Math.floor(Math.random()*hi.length)];
}
   else if(mess==("Kya") || mess.match("hua"))
   {
       b.textContent="Kuch nhi😂"
   }
   else if(mess.match("1") || mess.match("0"))
   {
       b.textContent="ek do teen chaar panch cheh saat aath nau das egyaara baarrah tera"
       
   }
   else if(mess==("nhi") || mess.match("no"))
   {
       b.textContent=no[Math.floor(Math.random()*no.length)]
   }
   else if(mess.match("what"))
   {
      b.textContent=what[Math.floor(Math.random()*what.length)]
   }
   else if(mess.match("ok"))
   {
      b.textContent="Kya ok-okay laga rakha hai whatsapp use kr rhe uski language mein bolo.                   Bolo 'k'"
   }
   else if(mess.match("hm"))
   {
      b.textContent="'hmm' kya hota hai hai angrezi medium nursery pass😏"
   }
   else if(mess==("k"))
   {
      b.textContent="hmm, ab thik hai"
   } 
   else if(mess.match("Created you") || mess.match("invented") || mess.match("created"))
   {
      b.textContent="Gautam Kumar"
   }
   else if(mess.match("love you") || mess.match("Love"))
   {
      b.textContent="Love you too😘"
   }   
   else if(mess.match("how") || mess.match("you"))
   {
      b.textContent="Lalan top aur bhidu tum"
   }  
   else if(mess.match("kya") || mess.match("kaise"))
   {
      b.textContent="Kuch nhi bacche tum nhi smjhoge"
   } 
   else if(mess.match("gana") || mess.match("sing"))
   {
      b.textContent="aukat mein."
   }      
   else if(mess.match("namaste") || mess.match("pranam"))
   {
      b.textContent="khush raho"
   }      
   
   else {
       b.textContent=abc[Math.floor(Math.random()*abc.length)].split("_").join(" ")
       
   }
   list.appendChild(b);
   text.value="";
   
},2000)
}
}