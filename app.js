var list = document.getElementById("list");



function sendMessage(event) {
    if (event.keyCode === 13) {
        var InpValue = event.target.value;
        if (InpValue !== "") {
            list.innerHTML += '<div class="ul-div"><li class="right-side">' + InpValue + '</li></div>';
            processResponse(InpValue);
            event.target.value = "";
            lastMessage();
        }
    }
}

function processResponse(message) {
    var lowerCaseMessage = message.toLowerCase();
    var responses = {
        greeting: ["hi", "hey", "hello", "hy", "oye", "salam", "asalam o alaikum", "ha", "hellow", "han"],
        status: ["theek",
            "mai theek",
            "set",
            "mast",
            "mai theek hoon",
            "allhamdullilah",
            "thik",
            "thk",
            "thik ho"],
        admission: ["mujhe admission lena hai",
            "mujhe admission chahiye",
            "admission lena hai",
            "admission chahiye",
            "admission chaiye",
            "admissions kab open honge",
            "admission process kya hai",
            "admission ke liye kya requirements hain",
            "admission form kahan milega",
            "admission ka procedure kya hai",
            "admission ka last date kab hai",
            "admission fees kitni hai",
            "admission ke liye documents kya kya chahiye",
            "admission se related kuch help chahiye",
            "admission ke bare me information chahiye",
            "admission ka schedule kya hai",
            "admission ke liye konsa course available hai",
            "Addmission fees kitne han ",
            "addmison fees han",
        ]
       
       
        
    
    };

    if (responses.greeting.indexOf(lowerCaseMessage) !== -1) {
        setTimeout(function () {
            list.innerHTML += '<li class="left-side">Hello, Welcome to SMIT chatbot:</li>';
            lastMessage();
        }, 2000);
        setTimeout(function () {
            list.innerHTML += '<li class="left-side">Ap kesy ho?</li>';
            lastMessage();
        }, 4000);
    } else if (responses.status.indexOf(lowerCaseMessage) !== -1) {
        setTimeout(function () {
            list.innerHTML += '<li class="left-side">me apko smit me smit me admission Lene ke Hawala se madad karsakta ho</li>';
            lastMessage();
        }, 2000);
    } else if (responses.admission.indexOf(lowerCaseMessage) !== -1) {
        setTimeout(function () {
            list.innerHTML += '<li class="left-side">Jee zaroor batyen apko konse course main admission lena hai?</li>';
            lastMessage();
        }, 2000);
    } else {
        setTimeout(function () {
            list.innerHTML += '<li class="left-side">yar me apke bat samaj nahe saka abhe mere upper working horahe han . ap admmisions ke hawale se poch sakta han mere se</li>';
            lastMessage();
        }, 2000);
    }
}

function lastMessage() {
    var scroll = document.querySelector(".scroll");
    scroll.scrollTop = scroll.scrollHeight;
}