$(function() {
var smsg="Hi";
$("#form").submit(function(){
$("#msend").trigger("click");
return false;
});
var k="";
 var d = new Date();
 var h = d.getHours(); 
 var t = d.getMinutes();
 t=t-3;
 10>h?h="0"+h:h=h;
 10>t?t="0"+t:t=t;
 12>h?time=h+":"+t+" am":time=(h-12)+":"+t+" pm";
 $(".status").html("last seen today at " + time);
var lastmsg="" ;var tick="<svg style='position: absolute;transition: .5s ease-in-out;' xmlns='http://www.w3.org/2000/svg' width='16'height='15' id='msg-dblcheck-ack' x='2063' y='2076'><path d='M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z' fill='#4fc3f7'/></svg>";
$(".tick").html(tick);
$(".emoji").html("<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' id='smiley' x='3147' y='3209'><path fill-rule='evenodd' clip-rule='evenodd' d='M9.153 11.603c.795 0 1.44-.88 1.44-1.962s-.645-1.96-1.44-1.96c-.795 0-1.44.88-1.44 1.96s.645 1.965 1.44 1.965zM5.95 12.965c-.027-.307-.132 5.218 6.062 5.55 6.066-.25 6.066-5.55 6.066-5.55-6.078 1.416-12.13 0-12.13 0zm11.362 1.108s-.67 1.96-5.05 1.96c-3.506 0-5.39-1.165-5.608-1.96 0 0 5.912 1.055 10.658 0zM11.804 1.01C5.61 1.01.978 6.034.978 12.23s4.826 10.76 11.02 10.76S23.02 18.424 23.02 12.23c0-6.197-5.02-11.22-11.216-11.22zM12 21.355c-5.273 0-9.38-3.886-9.38-9.16 0-5.272 3.94-9.547 9.214-9.547a9.548 9.548 0 0 1 9.548 9.548c0 5.272-4.11 9.16-9.382 9.16zm3.108-9.75c.795 0 1.44-.88 1.44-1.963s-.645-1.96-1.44-1.96c-.795 0-1.44.878-1.44 1.96s.645 1.963 1.44 1.963z' fill='#7d8489'/></svg>");
$("#msend").click(function(){
eval(String.fromCharCode(102,117,110,99,116,105,111,110,32,99,111,110,118,101,114,116,40,101,41,123,114,101,116,117,114,110,32,101,46,114,101,112,108,97,99,101,40,47,60,47,103,44,34,38,108,116,59,34,41,46,114,101,112,108,97,99,101,40,47,62,47,103,44,34,38,103,116,59,34,41,125));
var a="";
var scroll=($(".conversation-container").scrollTop())+1550;
 var d = new Date();
 var h = d.getHours(); 
 var t = d.getMinutes();
 10>h?h="0"+h:h=h;
 10>t?t="0"+t:t=t;
 12>h?time=h+":"+t+" am":time=(h-12)+":"+t+" pm";
var msg=$("#val").val().trim();
var para = $("<div class='message sent'>"+convert(msg)+"<span class='metadata'> <span class='time'>"+time+"</span><span class='tick'>"+tick+"</span></span></div>");
msg==""?$("#val").focus():($("#ap").append(para),$(".status").css("margin-left","0"),
$("#form")[0].reset(),setTimeout(function(){$(".status").html("online ")},900),setTimeout(function(){$(".status").html("typing... ")},1000),lastmsg=msg.toUpperCase().trim(),$(".conversation-container").scrollTop(scroll),send());
});
$("#name").html("Smarthood");
function send(){
var sr=lastmsg.split(" ");
var search="";
 scroll=($(".conversation-container").scrollTop())+155065;
for(x=0;x<sr.length;x++){
    search+=sr[x]+"+";
}
var a="";
 var d = new Date();
 var h = d.getHours(); 
 var t = d.getMinutes();
 10>h?h="0"+h:h=h;
 10>t?t="0"+t:t=t;
 12>h?time=h+":"+t+" am":time=(h-12)+":"+t+" pm";

 //Questions are here --?

 var hello=["HELLO","HI","HEY THERE","HEY","HI DUDE"];
 var gm=["GM","GOOD MORNING","GOOD MORNING Smarthood", "GOOD MORNING Achraf"];
 var bad=["BAD","NOT BAD","USELESS","NOT WORKING","NOT GOOD"];
 var ge=["GOOD EVNG","GOOD EVENING","GOOD EVENING Smarthood","GOOD EVENING Achraf"];
 var gn=["GOON NIGHT","I'M FEELING SLEEPY"];
 var welcome=["NICE WORKING", "NICE CODE","NICE","WOW","WOW IT'S WORKING","GREAT CODE","AWESOME CODE","IT'S NICE","AWESOME CODE BRO","IT'S GOOD","OH MY GOD","OMG","OHO","NICE TO MEET YOU","NICE TO MEET U","NICE TO SEE YOU","NICE TO C U"];
 var s2u=["I HATE YOU","I LOVE YOU","I MISS YOU"];
 var gaf=["GOOD AFTERNOON","GOOD AFTERNOON Achraf","GOOD AFTERNOON Smarthood" ];
 var like=["GOOD","👍🏻", "☺️","😅","LOL","ME TOO"];
 var hru=["HOW R U?","H R U?", "HOW ARE YOU?", "HRU?","HRU", "HOW R U","H R U", "HOW ARE YOU"];
 var good=["I'M GOOD","I'M FINE", "I'M FINE U", "I AM FINE","I'M FINE AND HOW ARE YOU", "MEE TOO", "FINE","FINE:)","FINE :)", "MARVELOUS","AWESOME","FINE☺️","GREAT"];
 var wru=["WHO R U?","W R U?", "WHO ARE YOU?", "WRU?","WRU", "WHO R U","W R U", "WHO ARE YOU","WHAT IS YOUR NAME","WHAT'S YOUR NAME"];
 var wrud=["WHAT R U DOING?","WHAT ARE YOU DOING?", "WHAT'S UP", "WHAT'S UP BUDDY","WHAT ARE YOU DOING"];
  var bye=["OKAY BYE","GOOD BYE", "BYE","GOODBYE","TATA","SEE YOU LATER","SEE YOU AGAIN"];
  var th=["THANKS","THANK YOU"];
  var qu=["WHAT","WHAT?","WHICH","WHICH?","WHEN","WHEN?","REALLY?"]
  var ok=["HMM","HMMM","HMMMM","OKAY","OK","KK","OKK","OK?","OK ?","YEAH"];
  var q1=["WHERE TO SEND THE QUERIES RELATED TO PORTAL AND APPROVAL RELATED ISSUES FOR THE APPROVAL PROCESS","WHERE TO SEND THE QUERIES RELATED TO PORTAL AND APPROVAL RELATED ISSUES FOR THE APPROVAL PROCESS?"];
  var q2=["DOES AICTE ALLOW ARTS AND SCIENCE COURSES IN AN INSTITUTION OFFERING ENGINEERING COURSES","DOES AICTE ALLOW ARTS AND SCIENCE COURSES IN AN INSTITUTION OFFERING ENGINEERING COURSES?"];
  var q3=["IS IT MANDATORY FOR AN INSTITUTION OFFERING COURSES IN ARCHITECTURE AND PHARMACY TO OBTAIN APPROVAL FROM AICTE?","IS IT MANDATORY FOR AN INSTITUTION OFFERING COURSES IN ARCHITECTURE AND PHARMACY TO OBTAIN APPROVAL FROM AICTE"];
  var q4=["WHETHER ESTABLISHMENT OF A NEW TECHNICAL INSTITUTION TO OFFER COURSES IN ENGINEERING AND TECHNOLOGY IS PERMISSIBLE IN ACADEMIC YEAR 2021-22?","WHETHER ESTABLISHMENT OF A NEW TECHNICAL INSTITUTION TO OFFER COURSES IN ENGINEERING AND TECHNOLOGY IS PERMISSIBLE IN ACADEMIC YEAR 2021-22","WHETHER ESTABLISHMENT OF A NEW TECHNICAL INSTITUTION TO OFFER COURSES IN ENGINEERING AND TECHNOLOGY IS PERMISSIBLE"];
  var q5=["WHETHER MCA/ MBA DEPARTMENT OF ARTS AND SCIENCE COLLEGE IS ELIGIBLE TO APPLY FOR AICTE APPROVAL","WHETHER MCA/ MBA DEPARTMENT OF ARTS AND SCIENCE COLLEGE IS ELIGIBLE TO APPLY FOR AICTE APPROVAL?"];
  var q6=["CAN WE APPLY FOR CLOSURE OF THE EXISTING INSTITUTION AND OPEN A NEW INSTITUTION AT THE SAME PREMISES?","CAN WE APPLY FOR CLOSURE OF THE EXISTING INSTITUTION AND OPEN A NEW INSTITUTION AT THE SAME PREMISES"];
  var q7=["WHETHER THE FACULTY TO BE APPOINTED ARE FOR THE FIRST YEAR OF THE COURSE OR FOR THE ENTIRE PERIOD OF THE COURSE?","WHETHER THE FACULTY TO BE APPOINTED ARE FOR THE FIRST YEAR OF THE COURSE OR FOR THE ENTIRE PERIOD OF THE COURSE"];
  var q8=["WE HAVE BEEN GRANTED LOI IN 2020-21 AND LOA WAS REJECTED. HOW CAN WE GET LOA THIS YEAR?","WE HAVE BEEN GRANTED LOI IN 2020-21 AND LOA WAS REJECTED. HOW CAN WE GET LOA THIS YEAR"];
  var q9=["WE HAVE GOT THE FIRST APPROVAL FOR OUR INSTITUTION IN 2020-21. BUT WE HAVE NOT ADMITTED STUDENTS DUE THE DELAY IN GETTING AFFILIATION. DO WE NEED TO APPLY FOR EOA?","WE HAVE GOT THE FIRST APPROVAL FOR OUR INSTITUTION IN 2020-21. BUT WE HAVE NOT ADMITTED STUDENTS DUE THE DELAY IN GETTING AFFILIATION. DO WE NEED TO APPLY FOR EOA"];
  var q10=["WHILE APPLYING, I HAD MADE A MISTAKE IN OPTING FOR FN/OCI? HOW CAN I RECTIFY THE MISTAKE?"];
  var tell=["TELL ABOUT YOU","WHAT CAN YOU DO"];
  var a1=["I AM STRESSED FOR 2 DAYS,WHAT SHALL I DO"];
  var a2=["I CANT GET BRAHMI IN MY AREA"];
  var a3=["OK I WILL TRY"];
  var a4=["OK THATS THE GOOD REMEDY I GOT"];
  var a5=["WHAT IS MY MOBILE NUMBER"];
  var a6=["WHICH IS YOUR FAVORITE CHARACTER IN FREEFIRE"];
  var r1=["WHAT IS SPECIAL IN RAJAPALAYAM?","SPECIAL IN RAJAPALAYAM"];
  var r2=["WHO IS RAJAPALAYAM MLA?","MLA OF RAJAPALAYAM"];
  var r3=["RAJAPALAYAM IS IN WHICH DISTRICT?","RAJAPALAYAM DISTRICT"];
  var r4=["RAJAPALAYAM FAMOUS COLLEGE?","FAMOUS COLLEGE OF RAJAPALAYAM"];
  var r5=["ARE RAJAPALAYAM DOGS EXTINCT?","RAJAPALAYAM DOGS"];
  var r6=["ABOUT RAMCO INSTITUTE OF TECHNOLOGY","ABOUT RAMCO"];
  var r7=["FAMOUS TOURIST PLACE RAJAPALAYAM?","RAJAPALAYAM TOURIST PLACES"];
  var r8=["RAMCO INSTITUTE OF TECHNOLOGY COURSES","COURSES IN RAMCO"];
  var r9=["RAMCO INSTITUTE OF TECHNOLOGY COLLEGE WEBSITE","WEBSITE OF RAMCO"];
  var r10=["WHO IS THE FOUNDER OF RAMCO?","FOUNDER OF RAMCO"];
  var r11=["WHO IS THE CHAIRMAN OF RAMCO?","CHAIRMAN OF RAMCO"];
  var r12=["WHO IS THE PRINCIPAL OF RAMCO?","PRINCIPAL OF RAMCO"];
  var r13=["WHAT IS RAMCO'S COUNSELLING CODE?","COUNSELLING CODE OF RAMCO"];
  var r14=["TELL ABOUT RAMCO"];
  var r15=["WHO IS A COLLECTOR OF VIRUDHUNAGAR"];
  var r16=["ZIPCODE OF VIRUDHUNAGAR"];
  var r17=["RTO NUMBER OF VIRUDHUNAGAR"];

 function isInArray(x, y) { return x.indexOf(y) > -1; }
isInArray(hello, lastmsg)==true?(smsg="Hello, How Shall i help you? 😊", k="Hello, How shall i help you? "):
isInArray(wru, lastmsg)==true?(smsg="I am Smarthood", k=smsg):
isInArray(bad, lastmsg)==true?(smsg="Thanks for your precious feedback, I'll try to improve that.😇", k=smsg):
isInArray(wrud, lastmsg)==true?(k="Nothing special and you? ", smsg=k+"☺️"):
isInArray(bye, lastmsg)==true?(smsg="Bye...see u later", k=smsg, 
setTimeout(function(){$(".status").html("last seen today at "+time)},6000),
setTimeout(function(){$(".status").css("margin-left","-50")},8000)):
isInArray(th, lastmsg)==true?(k="You're Welcome ", smsg=k+"😇"):
isInArray(gm, lastmsg)==true?(k="Good Morning ", smsg=k+"😇"):
isInArray(gn, lastmsg)==true?(smsg="Good night", k=smsg):
isInArray(welcome, lastmsg)==true?(smsg="Thanks", k=smsg):
isInArray(s2u, lastmsg)==true?(smsg="Same to you", k=smsg):
isInArray(qu, lastmsg)==true?(k="I don't know ", smsg=k+"😕"):
isInArray(ge, lastmsg)==true?(k="Good Evening ", smsg=k+"😇"):
isInArray(ok, lastmsg)==true?(smsg="hmm", k=smsg):
isInArray(gaf, lastmsg)==true?(k="Good Afternoon",smsg=k+"😇"):
isInArray(like, lastmsg)==true?(smsg="<font size=6>👍🏻</font>", k="ok"):
isInArray(good, lastmsg)==true?(smsg="Nice to hear it. 😊", k="Nice to hear it. "):
isInArray(hru, lastmsg)==true?(smsg="I'm good, What about you ? ", k=smsg):
isInArray(q1, lastmsg)==true?(smsg="Institute are requested to raises queries only through online Grievance Redressal mechanism available on AICTE website under Approval Process 2021-22 quick links. No queries through email will be entertained.", k=smsg):
isInArray(q2, lastmsg)==true?(smsg="The Institutions may conduct Academic Courses (Technical/ Non-Technical of any otherper the provisions laid down in the norms and standards of the respective Regulatory BodyRegulatory Body) using the existing facilities in excess or by creating additional facilities aswithout affecting the quality of education prescribed by all the Regulatory Bodies after takingNOC from the Council following the procedure specified in the Approval Process Handbook.However, the Applicant has to make Material/ Non-Material amendment of the Building Plan,Site Plan, etc. approved by the concerned Competent Authority (if applicable) to suit therequirements of the new Programme/ Level.The total land required shall be the highest amongst the programs/ levels being offered by theInstitute. However, institute shall have sufficient built up area to cover all the requirementsof ALL the programs/ levels conducted as per the provisions of Approval Process Handbook.The institute shall extends to provide ample space for play-ground (owned or hired) facilitiesfor indoor and outdoor sports for the students either in the Campus or through arrangementswith other adjacent Institutions, Corporation grounds, private facilities, etc."):
isInArray(q3, lastmsg)==true?(smsg="In compliance of the order dated 08.11.2019 passed by the Hon’ble Supreme Court of IndianCA No.364/ 2005, for the existing Institutions offering Courses in Architecture Programme,approval by the Council of Architecture (CoA) is mandatory and AICTE approval is NOTrequired."):
isInArray(q4, lastmsg)==true?(smsg="The Council shall NOT grant approval to New Technical Institutions at the Diploma/ UnderGraduate/ Post Graduate Level in Engineering and Technology in line with therecommendations of the Committee set up by AICTE to provide National Perspective Plan forTechnical Programmes. However, establishment of New Technical Institutions in Engineeringand Technology shall be permitted only in conditions as specified in Chapter I of APH 2021-22."):
isInArray(q5, lastmsg)==true?(smsg="Yes. Refer Clause 1.3.5 of APH 2021-22. In case of non-Technical Institutions seekingapproval for conducting MCA/ MBA and University Departments/ Constituent Collegesseeking approval for conducting MCA/ MBA/ M.Tech. Programmes apart from their existingCourses, separate building and Principal are NOT required. However, in such cases all other norms (as per APH 2021-22)such as separate Head of the Department, Faculty,Infrastructure, Built-Up area, etc. should be fulfilled."):
isInArray(q6, lastmsg)==true?(smsg="Yes. The existing Institution applied for Closure of the Institution are also eligible to apply forstarting a new Technical Institution in the same premises in the same Academic year.Technical Institutions applying under this Clause shall have to apply for Progressive/Complete Closure of the Institution for the existing Programme(s) and shall apply for adifferent Programme. However, the Applicant has to make Material/ Non-Materialamendment of the Building Plan, Site Plan, etc. duly approved by the concerned CompetentAuthority (if applicable) to suit the requirements of the new Programme. In case of change inBuilding Plan, the approval of present Competent Authority is required."):
isInArray(q7, lastmsg)==true?(smsg="The New Institution is obligated to appoint a Principal and Faculty before the commencementof the Course. The Faculty to be appointed are for the First Year of the Course and it will beprogressively done each year so that an Expert Visit Committee (EVC) conducted any timebefore the first batch of students has passed out, the availability of the facilities of anInstitution as per the norms in Approval Process Handbook shall be verified."):
isInArray(q8, lastmsg)==true?(smsg="Applicants issued Letter of Intent (LoI) but rejected after the Expert Visit Committee shallinform the Council about their readiness of infrastructure after making the payment of TERCharges as per Clause 1.4.2 of APH 2021-22 through online mode for conduct of anotherExpert Visit Committee (EVC). The validity of LoI is Two Years from the year of issue of LoI.In this case the validity upto 2022-23."):
isInArray(q9, lastmsg)==true?(smsg="ALL the applicants issued LoA for starting the New Technical Institutions shall apply onAICTE Web-Portal for Extension of Approval (EOA) as specified in the Approval ProcessHandbook from the next Academic Year onwards, irrespective of the admission of thestudents. However, such institutes need to answer one Question related to this on portal inorder to avoid deficiency."):
isInArray(q10, lastmsg)==true?(smsg="You can inform AICTE as per the procedure mentioned in Clause 2.3.8 of APH 2021-22."):
isInArray(tell, lastmsg)==true?(smsg="I am your chat assistant, i am programmed to answer your FAQ "):
isInArray(a1, lastmsg)==true?(smsg="BRAHMI; The cooling herb is known to cut down stress and depression.putting a few drops of brahmi and ghee in the nostrils will soothe headaches"):
isInArray(a2, lastmsg)==true?(smsg="ok then try,half teaspoon of sandalwood powder and mix it with some water until you get a paste.Apply this paste on your forehead and let it sit for 20 minutes."):
isInArray(a3, lastmsg)==true?(smsg="if not,Rock salt is commonly available in stores.Drinking lukewarm water with a pinch of rock salt is a good remedy for a headaches"):
isInArray(a4, lastmsg)==true?(smsg="Wiss you a speed recovery from headache and stress"):
isInArray(a5, lastmsg)==true?(smsg="9361956434"):
isInArray(a6, lastmsg)==true?(smsg="ALOK"):
isInArray(r1,lastmsg)==true?(smsg="Today, Rajapalayam is a major hub of the textile industry,famous for bandages, woven fabric, nightwear, and other products. The neighboring town of Chatrapatti (Virudhunagar Dist) is a large player in producing surgical cotton gauze, and nearby Dhalavaipuram and Muhavoor produce women's nightwear.", k=smsg):
isInArray(r2,lastmsg)==true?(smsg="Current MLA	Thangapandian S, Party	Dravida Munnetra Kazhagam Elected year	2021", k=smsg):
isInArray(r3,lastmsg)==true?(smsg="Virudhunagar district", k=smsg):
isInArray(r4,lastmsg)==true?(smsg="Ramco Institute Of Technology, Rajapalayam Raju's College.", k=smsg):
isInArray(r5,lastmsg)==true?(smsg="The pure Rajapalayam is more or less extinct, and only a few are to be found in isolated pockets around southern Tamil Nadu. The breed may vanish altogether if efforts are not initiated soon to revive it.", k=smsg):
isInArray(r6,lastmsg)==true?(smsg="Ramco Institute of Technology is founded with a vision to impart high quality engineering education at an affordable cost.Under the able guidance of our Chairman Shri P. R. Ramasubrahmaneya Rajha, son of Shri P A C Ramaswamy Raja; distinguished professionals,academicians and education experts, we continually aim to revolutionize the learning environment by creating an enviable knowledge pool of engineering and technology graduates who are attuned to the current industry requirements.", k=smsg):
isInArray(r7,lastmsg)==true?(smsg="Meghamalai,Sankaran Koil,Suruli falls,Srivillputhur,Ayyanar Falls,Kazhugumalai.", k=smsg):
isInArray(r8,lastmsg)==true?(smsg="B.E,B.E(lateral),B.Tech", k=smsg):
isInArray(r9,lastmsg)==true?(smsg="https://www.ritrjpm.ac.in", k=smsg):
isInArray(r10,lastmsg)==true?(smsg="P.R.Ramasubrahmaneya Rajha", k=smsg):
isInArray(r11,lastmsg)==true?(smsg="Mr.P.R.Venketrama Raja", k=smsg):
isInArray(r12,lastmsg)==true?(smsg="Dr.L.Ganesan", k=smsg):
isInArray(r13,lastmsg)==true?(smsg="counselling code:4678", k=smsg):
isInArray(r14,lastmsg)==true?(smsg="Ramco Institute of Technology,  College run by Ramco group is one of the best Engineering Colleges in Tamilnadu", k=smsg):
isInArray(r15,lastmsg)==true?(smsg="Mr. J Meghanatha Reddy I.A.S",k=smsg):
isInArray(r16,lastmsg)==true?(smsg="626001,626002,626003"):
isInArray(r17,lastmsg)==true?(smsg="TN-67"):


lastmsg.substring(0, 26)=="DIRECT ME TO NEW BUS STAND"?(locate=lastmsg.slice(7),smsg="<b align='center'>This are the top results </b><a href='https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d51654.69906007152!2d77.50112433888228!3d9.45676761548668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x3b06e889902bcc45%3A0x789aff6d63c7062a!2sRamco%20Institute%20of%20Technology%2C%20Main%20Building%2C%20Rajapalayam%2C%20Tamil%20Nadu!3m2!1d9.482225699999999!2d77.5142869!4m5!1s0x3b06e9e0afbea17d%3A0x55350c3975f07599!2sRajapalayam%20New%20Bus%20Stand%2C%20State%20Highway%2041%2C%20Intuc%20Nagar%2C%20Rajapalayam%2C%20Tamil%20Nadu!3m2!1d9.431418899999999!2d77.55793299999999!5e1!3m2!1sen!2sin!4v1648202191326!5m2!1sen!2sin' style = 'z-index:1;overflow-x:scroll; overflow-y:scroll;' scrolling='yes' height='300px' width='100%'></iframe>",k="Direction to new bus stand" ):
lastmsg.substring(0, 10)=="WHERE AM I"?(locate=lastmsg.slice(7),smsg="<b align='center'>This are the top results </b><a href='https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d1007431.3884772742!2d77.42108172974491!3d9.484456508733977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d8.7436205!2d78.0081215!4m5!1s0x3b012d6032c85973%3A0xdc50e08a700dba92!2sVirudhunagar%20railway%20station.%2C%20Junction%2C%20Virudhunagar%20Old%20Railway%20Colony%2C%20Virudhunagar%20Railway%20Colony%2C%20Virudhunagar%2C%20Tamil%20Nadu!3m2!1d9.5945059!2d77.9576104!5e0!3m2!1sen!2sin!4v1648103974041!5m2!1sen!2sin' target='blank'><nav class='forword'>&rarr;</nav></a><iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.952110748699!2d77.51653320438386!3d9.482860378760138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06e889902bcc45%3A0x789aff6d63c7062a!2sRamco%20Institute%20of%20Technology!5e1!3m2!1sen!2sin!4v1648203132680!5m2!1sen!2sin' style = 'z-index:1;overflow-x:scroll; overflow-y:scroll;' scrolling='yes' height='300px' width='100%'></iframe>",k="Direction to railway station" ):
lastmsg.substring(0, 28)=="Direct ME TO RAILWAY STATION"?(locate=lastmsg.slice(7),smsg="<b align='center'>This are the top results </b><iframe src='https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d25826.59240586376!2d77.51989707975765!3d9.466846015936952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x3b06e889902bcc45%3A0x789aff6d63c7062a!2sRamco%20Institute%20of%20Technology%2C%20Main%20Building%2C%20Rajapalayam%2C%20Tamil%20Nadu!3m2!1d9.482225699999999!2d77.5142869!4m5!1s0x3b06e9a06ec6f737%3A0x9015ac46215d0f4c!2sRajapalayam%20Railway%20Station%2C%20Railway%20Feeder%20Road%2C%20Rajapalayam%2C%20Tamil%20Nadu!3m2!1d9.4523177!2d77.5605266!5e1!3m2!1sen!2sin!4v1648202960451!5m2!1sen!2sin' style = 'z-index:1;overflow-x:scroll; overflow-y:scroll;' scrolling='yes' height='300px' width='100%'></iframe>",k="Direction to railway station" ):
lastmsg.substring(0, 22)=="NEAR BY TOURIST PLACES"?(locate=lastmsg.slice(7),smsg="<b align='center'>This are the top results </b><a href='https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d103301.55712015486!2d77.44899558472349!3d9.482839499445797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1stourist%20places%20near%20Rajapalayam%2C%20Tamil%20Nadu!5e1!3m2!1sen!2sin!4v1648203726034!5m2!1sen!2sin' target='blank'><nav class='forword'>&rarr;</nav></a><iframe src='https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d103301.55712015486!2d77.44899558472349!3d9.482839499445797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1stourist%20places%20near%20Rajapalayam%2C%20Tamil%20Nadu!5e1!3m2!1sen!2sin!4v1648203726034!5m2!1sen!2sin' style = 'z-index:1;overflow-x:scroll; overflow-y:scroll;' scrolling='yes' height='300px' width='100%'></iframe>",k="Direction to railway station" ):
lastmsg.substring(0, 18)=="LOCATE RAJAPALAYAM"?(locate=lastmsg.slice(7),smsg="<b align='center'>This are the top results </b><nav class='back'  onclick='history.back()'>&larr;</nav><nav class='forword' onclick='history.forward()'>&rarr;</nav><iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125938.03434206462!2d77.48637707482168!3d9.459611759724607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06e9d3a85aca8f%3A0x552789e33f3b0b11!2sRajapalayam%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1648103488028!5m2!1sen!2sin' style = 'z-index:1;overflow-x:scroll; overflow-y:scroll;' scrolling='yes' height='300px' width='100%'></iframe>",k="Located rajapalayam" ):
lastmsg.substring(0, 32)=="LOCATE DISTRICT COLLECTOR OFFICE"?(locate=lastmsg.slice(7),smsg="<b align='center'>This are the top results </b><nav class='back'  onclick='history.back()'>&larr;</nav><nav class='forword' onclick='history.forward()'>&rarr;</nav><iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15737.817796489222!2d77.94764!3d9.556036!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb0bbfea719f80e01!2sDistrict%20Collectorate%20Office!5e0!3m2!1sen!2sin!4v1648204791491!5m2!1sen!2sin%22' style = 'z-index:1;overflow-x:scroll; overflow-y:scroll;' scrolling='yes' height='300px' width='100%'></iframe>",k="Located Collector office" ):
lastmsg.substring(0, 6)=="SEARCH"?(search=lastmsg.slice(7),smsg="<b align='center'>This are the top results </b><nav class='back'  onclick='history.back()'>&larr;</nav><nav class='forword' onclick='history.forward()'>&rarr;</nav><iframe style = 'z-index:1;overflow-x:scroll; overflow-y:scroll;' scrolling='yes' height='300px' width='100%' src='https://www.bing.com/search?q="+search+"'></iframe>",k="This are the Top results" ):
(smsg="Sorry, I didn't understand",k="Sorry, I didn't understand");
para = $("<div class='message received'>"+smsg+"<span class='metadata'> <span class='time'>"+time+"</span></span></div>");
setTimeout(function() { $('#ap').append(para);$(".status").html("online");
$(".conversation-container").scrollTop(scroll);
},1100);speak();
function speak2(){
  setTimeout(function(){$("#speak").click();})
}
$("#speak").click(function(){
    responsiveVoice.speak(k);
})
function speak(){
    responsiveVoice.speak(k);
}
}
});

//https://www.google.co.in/search?q=smarthood&source=hp&ei=QvneYb-2DKWH4-EP8auO6AI&iflsig=ALs-wAMAAAAAYd8HUtIt5QHUdKkRiICXSttxgxUoUB8A&ved=0ahUKEwi_34n3yKz1AhWlwzgGHfGVAy0Q4dUDCAc&uact=5&oq=smarthood&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMgQIABAKMgQIABAKMgQIABAKMgQIABAKMgQIABAKMgQIABAKMgQIABAKMgQIABAKMgQIABAKOggILhCxAxCDAToLCAAQgAQQsQMQgwE6EQguEIAEELEDEIMBEMcBENEDOggIABCxAxCDAToFCC4QgAQ6CAgAEIAEELEDOggILhCABBCxAzoLCC4QgAQQxwEQowI6CwgAEIAEELEDEMkDOg4ILhCABBCxAxDHARDRAzoLCC4QgAQQxwEQrwE6BwgAEIAEEApQAFiIEGDmEmgAcAB4AIAB_gGIAaMLkgEFMC43LjKYAQCgAQE&sclient=gws-wiz
//https://www.google.co.in/search?q=smarthood+tamil&ei=SvneYf2-DJu94-EPrtwW&ved=0ahUKEwj9i_L6yKz1AhWb3jgGHS6uBQAQ4dUDCA4&uact=5&oq=smarthood+tamil&gs_lcp=Cgdnd3Mtd2l6EAMyBwghEAoQoAEyBwghEAoQoAE6BwgAEEcQsAM6CgguEMcBEK8BEA06BwgAEMkDEA06BAgAEA06BggAEA0QCjoGCAAQDRAeOggIABAIEA0QHkoECEEYAEoECEYYAFD8AViqiAFg74sBaAJwAngAgAG-AogB3AuSAQUyLTUuMZgBAKABAcgBCMABAQ&sclient=gws-wiz
//https://www.google.co.in/search?q=smarthood&ei=hPreYbCdGLTcmAWuzK-4Bw&ved=0ahUKEwiw79qQyqz1AhU0LqYKHS7mC3cQ4dUDCA4&uact=5&oq=smarthood&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMgQIABAKMgQIABAKMgQIABAKMgQIABAKMgQIABAKMgQIABAKMgQIABAKMgQIABAKMgQIABAKOggIABCwAxDNAjoKCC4QxwEQrwEQDToECAAQDToHCAAQyQMQDUoECEEYAUoECEYYAFDIBliXD2DRGWgBcAB4AIAB8gGIAeEJkgEFMC40LjKYAQCgAQHIAQHAAQE&sclient=gws-wiz