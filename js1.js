const load=document.getElementById("load");
const all=document.getElementById("all");
const fullscreen=document.getElementById("taskmain");
const fullscreen2=document.getElementById("icon");
const aapps=document.getElementById("aapps")
const box11=document.getElementById("box11")
const box12=document.getElementById("box12")
const recm=document.getElementById("recm")
const sthide=document.getElementById("sthide")
const stmenu=document.getElementById("stmenu")
const dn=document.getElementById("dn")
const bo=document.getElementById("bo")
const hs=document.getElementById("hs")
const re=document.getElementById("re")

const mainfex=document.getElementById("mainfex")
const mids1=document.getElementsByClassName("mids")[0]
const mids2=document.getElementsByClassName("mids")[1]
const mids3=document.getElementsByClassName("mids")[2]
const mids4=document.getElementsByClassName("mids")[3]
const mids5=document.getElementsByClassName("mids")[4]


const fexhead=document.getElementById("fexhead")
const allcontent1=document.getElementById("allcontent1")
const allcontent2=document.getElementById("allcontent2")

const test=document.querySelector("#document").querySelectorAll(".acs")

const testing=document.getElementById("acs5")
const testing2=testing.children;
const testing3=listchildren[1];
const testing4=testing3.cloneNode(true);
testing.appendChild(testing4)



test.forEach(element =>{
    element.addEventListener("click", function(){
        test.forEach(nav=>nav.classList.remove("als"))

        this.classList.add("als")
    })
});




var fs=document.documentElement;
// load.addEventListener("click", () =>{
//     fs.requestFullscreen();
//     })
// fullscreen.addEventListener("click", () =>{
//     fs.requestFullscreen();
// })
// fullscreen.addEventListener("click", () =>{
//     fs.requestFullscreen();
// })
// fullscreen2.addEventListener("click", () =>{
//     fs.requestFullscreen();
// })
// var elem = document.documentElement; if (elem.requestFullscreen) { elem.requestFullscreen() }
aapps.addEventListener("click",()=>{
    if(box11.style.display=='block'){
        box11.style.display='none';
        box12.style.display='none';
        recm.style.display='block';
        
    }
    else{
        box11.style.display='block';
        box12.style.display='block';
        recm.style.display='none';
        
    }
});

recm.addEventListener("click",()=>{
    if(box12.style.display=='block'){
        box12.style.display='none';

    }
    else{
        box12.style.display='block';
        
       }
});


const refresh=document.getElementsByClassName("refresh")[0];
audio=new Audio();
audio.src="bce.mp3"
load.addEventListener("click", ()=>{
    load.style.display="none";
    
})
setInterval(()=>{
    const time=document.getElementById("clock");
    let date=new Date();
    let hrs= date.getHours();
    let min= date.getMinutes();
    let sec= date.getSeconds();
    let day_night="AM";
    
    if(hrs>12){
        day_night="PM";
        hrs=hrs-12
    }
    if(sec<10){
        sec="0"+sec
    }
    if(min<10){
        min="0"+min
    }
    if(hrs<10){
        hrs="0"+hrs
    }
    time.textContent=hrs + " : " + min + " : " + sec + " - " + day_night;
})
const hide=document.getElementById("hide")
const tb=document.getElementById("i1")
const icon=document.getElementById("icon")

// var fs= document.documentElement;
// function openFullscreen() {
//   if (fs.requestFullscreen) {
//     fs.requestFullscreen();
//   } else if (fs.webkitRequestFullscreen) { /* Safari */
//     fs.webkitRequestFullscreen();
//   } else if (fs.msRequestFullscreen) { /* IE11 */
//     fs.msRequestFullscreen();
//   }
// }

// function closeFullscreen() {
//   if (document.exitFullscreen) {
//     document.exitFullscreen();
//   } else if (document.webkitExitFullscreen) { /* Safari */
//     document.webkitExitFullscreen();
//   } else if (document.msExitFullscreen) { /* IE11 */
//     document.msExitFullscreen();
//   }
// }

hide.addEventListener("click", ()=>{
    if(tb.style.display=='none'){
        tb.style.display='flex'
        hide.classList.replace("fa-eye","fa-eye-slash");
        icon.style.background='initial';
        fs.requestFullscreen();
        
        
        
    }
    else{
        hide.classList.replace("fa-eye-slash","fa-eye"); 
        tb.style.display='none';
        icon.style.background='transparent';
        fs.msexitFullscreen();
        
    }
})
refresh.addEventListener("click", ()=>{
    confirm("Do you want to refresh ?")
});

var apps1=document.getElementById('apps1');
var apps2=document.getElementById('apps2');
var apps3=document.getElementById('apps3');
var apps4=document.getElementById('apps4');
var apps5=document.getElementById('apps5');
var apps6=document.getElementById('apps6');
var apps7=document.getElementById('apps7');
var apps8=document.getElementById('apps8');
var apps9=document.getElementById('apps9');
var apps10=document.getElementById('apps10');
var apps11=document.getElementById('apps11');
var fex=document.getElementById('fex');

var tab=document.getElementById('window');

var cross=document.getElementsByClassName('close')[0];
var fexclose=document.getElementsByClassName('fexclose')[0];
var crossleft=document.getElementsByClassName('close-left')[0];

var tcons=document.getElementsByClassName('tcons');
[document.querySelector(".close"),document.querySelector(".close-left"),document.querySelector(".fexclose")].forEach(crossl =>{
    crossl.addEventListener("click",()=>{
    apps1.style.display="none";
    apps2.style.display="none";
    apps3.style.display="none";
    apps4.style.display="none";
    apps5.style.display="none";
    apps6.style.display="none";
    apps7.style.display="none";
    apps8.style.display="none";
    apps9.style.display="none";
    apps10.style.display="none";
    apps11.style.display="none";
    fex.style.display="none";
    cross.style.display="none";
    fexclose.style.display="none";
    
    for(x=0;x<tcons.length;x++){
        tcons[x].style.color="white";
    }
    });
});


$(document).ready(function(){
    $(".close-left,.close,.fexclose").on("click", function(){
        $(".close-left").hide()
       
    });
    $("#a1,#a2,#a3,#aai1,#aai2,#aai3,#aai4,#aai5,#aai6,#aai7,#aai8,#aai9,#aai10,#aai11,#aai12,#aai13,#aai14,#aai15,#ico2,#ico3").on('click',function(){
        $(".wins").css("display","flex");
        $(".close").toggle();
        $(".close-left").show()

    })
    $("#a1,#aai1").on("click", function(){
        $("#apps1").toggle();
        $("#a1").css("color","yellow")
    });

    $("#aai2,#aai10").on("click", function(){
        $("#apps4").toggle();

        
    });
    $("#aai3,#aai11").on("click", function(){
        $("#apps5").toggle();

    });
    $("#aai4").on("click", function(){
        $("#apps6").toggle();

    });
    $("#aai5,#aai13").on("click", function(){
        $("#apps7").toggle();

    });
    $("#aai6").on("click", function(){
        $("#apps8").toggle();
    });

    $("#aai9,#aai15").on("click", function(){
        $("#apps9").toggle();

    });
    $("#aai7,#aai12").on("click", function(){
        $("#apps10").toggle();
    });
    $("#aai8,#aai14").on("click", function(){
        $("#apps11").toggle();
    });

    $("#a4,#ico1").on("click", function(){
        $("#fex").toggle();
        $("#a4").css("color","yellow")
        $(".wins").css("display","flex");
        $(".fexclose").toggle();
        $(".close-left").show()
    });

    $("#a2,#ico2").on("click", function(){
        $("#apps2").toggle();
        $("#a2").css("color","yellow")
    });

    $("#a3,#ico3").on("click", function(){
        $("#apps3").toggle();
        $("#a3").css("color","yellow")
    });
});

$(document).ready(function(){
    
    $("#logo").on("click",function(){
        $("#stmenu").toggle()
    });
    $(".close2").on("click",function(){
        $("#stmenu").hide()
    });
    $(".aai").on("click",function(){
        $("#stmenu").hide()
    })
})

function reload() {
    document.getElementById('google').src += '';
    document.getElementById('music').src += '';
    document.getElementById('calcu').src += '';
    document.getElementById('yt').src += '';
    document.getElementById('fb').src += '';
    document.getElementById('tiktok').src += '';
    document.getElementById('insta').src += '';
    document.getElementById('edge').src += '';
    document.getElementById('khop').src += '';
    
}
crossleft.onclick = reload;
cross.onclick = reload;

var bold=document.getElementById("bold")
var underline=document.getElementById("underline")
var italic=document.getElementById("italic")

var newf=document.getElementById("new")
var text=document.getElementById("text")
var tex=document.getElementById("tex")
var savef=document.querySelector("#save")


bold.addEventListener("click",()=>{
    if(tex.style.fontWeight=="bold"){
        tex.style.fontWeight="normal"
    }
    else{
        tex.style.fontWeight="bold"
    }
})
italic.addEventListener("click",()=>{
    if(tex.style.fontStyle=="italic"){
        tex.style.fontStyle="normal"
    }
    else{
        tex.style.fontStyle="italic"
    }
})
underline.addEventListener("click",()=>{
    if(tex.style.textDecoration=="underline"){
        tex.style.textDecoration="normal"
    }
    else{
        tex.style.textDecoration="underline"
    }
})


newf.addEventListener("click",()=>{
    text.innerHTML="";
});

let camera_button = document.querySelector("#start-camera");
let cameraoff_button = document.querySelector("#stop-camera");
let video = document.querySelector("#video");
let click_button = document.querySelector("#click-photo");
let canvas = document.querySelector("#canvas");

camera_button.addEventListener('click', async function() {
   	let stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
	video.srcObject = stream;
});
cameraoff_button.addEventListener('click', async function() {
   	let strea = await navigator.mediaDevices.getUserMedia({ video: false, audio: false });
	video.srcObject = strea;
});

click_button.addEventListener('click', function() {
   	canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
   	let image_data_url = canvas.toDataURL('image/jpeg');

   	// data url of the image
   	console.log(image_data_url);
});



$(document).ready(function(){
    $(".fa-wifi").on('click', function(){
        $("#wifidiv").toggle()
    })
    $(".cosbox ul").on('click', function(){
        $(".cosbox").hide()
    })
    $(".bgchange").on('click', function(){
        $(".cosbox").toggle()
        $(".cosbox").css('margin-top','4vh')
    })
    
    
})
dn.addEventListener("click",()=>{
    if(fex.style.background=="transparent"){
        fex.style.background="black"
        fex.classList.toggle("els")
        mainfex.style.background="url('img/acsbg.png')"
        mainfex.style.backgroundRepeat="no-repeat"
        mainfex.style.backgroundPosition="center"
        
        
    }
    else{
        fex.style.background="transparent"
        fex.classList.toggle("els")
        mainfex.style.background="none"

    }
})
bo.addEventListener("click",()=>{
    if(fex.style.fontWeight=="bold"){
        fex.style.fontWeight="normal"
        
    }
    else{
        fex.style.fontWeight="bold"
        
    }
})
hs.addEventListener("click",()=>{
    if(fex2.style.display=="none"){
        fex2.style.display="block"
        
    }
    else{
        fex2.style.display="none"
        
    }
})
re.addEventListener("click",()=>{
    fex.style.background="black"
    mainfex.style.background="url('img/acsbg.png')"
        mainfex.style.backgroundRepeat="no-repeat"
        mainfex.style.backgroundPosition="center"
    fex2.style.display="block"
    fex.style.fontWeight="normal"

    
})
$(document).ready(function(){
    
    $(".oo1").on('click' ,function(){
        $(".mids").css('border-radius','50%')
        $(".allcontents").css('display','none')
        $(".oo1").css('border-radius','20%')
        $("#allcontent1").css('display','grid')
        
    })
    $(".oo2").on('click' ,function(){
        $(".mids").css('border-radius','50%')
        $(".allcontents").css('display','none')
        
        $(".oo2").css('border-radius','20%')
        $("#allcontent2").css('display','grid')
    })
    $(".oo3").on('click' ,function(){
        $(".mids").css('border-radius','50%')
        $(".allcontents").css('display','none')
        
        $(".oo3").css('border-radius','20%')
        $("#allcontent3").css('display','grid')

    })
    $(".oo4").on('click' ,function(){
        $(".mids").css('border-radius','50%')
        $(".allcontents").css('display','none')
        
        $(".oo4").css('border-radius','20%')
        $("#allcontent4").css('display','grid')

    })
    $(".oo5").on('click' ,function(){
        $(".mids").css('border-radius','50%')
        $(".allcontents").css('display','none')
        
        
        $(".oo5").css('border-radius','20%')
        $("#allcontent5").css('display','grid')

    })
    
    $(".delete").on('click',function(){
        $(".als").css("display","none")
    })
    $(".restore").on('click',function(){
        $(".acs").css("display","block")
    })
    
})
mids1.addEventListener("click",()=>{
    fexhead.textContent="DOCUMENT"
    
})
mids2.addEventListener("click",()=>{
    fexhead.textContent="DOWNLOADS"
    
})
mids3.addEventListener("click",()=>{
    fexhead.textContent="IMAGES"
})
mids4.addEventListener("click",()=>{
    fexhead.textContent="MUSICS"
})
mids5.addEventListener("click",()=>{
    fexhead.textContent="VIDEOS"
})


