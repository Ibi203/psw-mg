var buttonT = document.getElementById('buttonT');//pakt ie dingen van html methulp van id
var inputUrl = document.getElementById('inputurl');
var inputWw = document.getElementById('inputww');
var ul = document.getElementById('articleul');

function addListItem() {// maakt de functie 
    var url = inputUrl.value;
    var password = inputWw.value;

    if (url === '' || password === '') {
        document.getElementById('error').style.display = 'block';
        return;
    } else {
        document.getElementById('error').style.display = 'none';
    }//stuukje hierboven zorgt voor de error bericht als url en password leeg zijn

    var li = document.createElement("li");
    var span = document.createElement("span");
    span.innerText = url;
    li.appendChild(span);//hier maakt ie een nieuwe span in de  nieuwe url  

    var passwordInput = document.createElement('input');
    passwordInput.type = 'password';
    passwordInput.value = password;
    passwordInput.disabled = true;
    passwordInput.classList.add("sww");
    li.appendChild(passwordInput);//maakt de nieuwe wachtwoord 

    var showButton = document.createElement('button');
    var icon = document.createElement('i');
    icon.className = "fa-regular fa-eye";
    showButton.appendChild(icon);//zet de knop bij de nieuwe input

    showButton.onmousedown = function () {
        passwordInput.type = 'text';
    };
    showButton.onmouseup = function () {
        passwordInput.type = 'password';
    };
    li.appendChild(showButton);

    var deleteButton = document.createElement('button');
    deleteButton.innerText = 'Verwijderen';
    deleteButton.classList.add('button-delete');
    deleteButton.onclick = function () {
        li.remove();
    };
    li.appendChild(deleteButton);

    ul.appendChild(li);

    inputUrl.value = '';
    inputWw.value = '';

    itemCount++;
}

buttonT.onclick = addListItem;
inputUrl.onkeyup = function (event) {
    if (event.key === "Enter") {
        addListItem();//roept de functoe op bij een onclick of enter 
    }
};

inputWw.onkeyup = function (event) {
    if (event.key === "Enter") {
        addListItem();
    }
};

var buttond = document.getElementById("buttons");
var input1 = document.getElementById("inputd");

if (buttond && input1) {
    buttond.onmousedown = function () {
        if (input1.type === "password") {
            input1.type = "text";
        }
    };

    buttond.onmouseup = function () {
        if (input1.type === "text") {
            input1.type = "password";
        }
    };
}

var buttond2 = document.getElementById("button2");
var input2 = document.getElementById("input2");

if (buttond2 && input2) {
    buttond2.onmousedown = function () {
        if (input2.type === "password") {
            input2.type = "text";
        }
    };

    buttond2.onmouseup = function () {
        if (input2.type === "text") {
            input2.type = "password";
        }
    };
};

var buttonc = document.getElementById("button+");
var artikel1 = document.getElementById("article--js");
var artikel2 = document.getElementById("article2");

buttonc.onclick = function () {
    artikel1.classList.toggle("swap1");
    artikel2.classList.toggle("swap2");
};//hier boven veranderd de plek van de artikels als je op de knop kilikt

var buttonShowAll = document.getElementById('buttonShowAll');

buttonShowAll.onmousedown = function () {
    togglePasswords('text');
};

buttonShowAll.onmouseup = function () {
    togglePasswords('password');
};//hier maakt die de show all password functie

function togglePasswords(type) {
    var passwordFields = document.getElementsByClassName('sww');
    for (var i = 0; i < passwordFields.length; i++) {
        passwordFields[i].type = type;
    }
}

window.onload = function () {
    
    var ItemCount = 3; 
    

    for (var i = 0; i <= ItemCount; i++) {
        var item = document.getElementById("item" + i);
        if (item) {
            var deleteButton = document.createElement('button');
            deleteButton.innerText = 'Verwijderen';
            deleteButton.classList.add('button-delete');
            deleteButton.onclick = function() {
                item.remove();
            };
            item.appendChild(deleteButton);
        }
    }

};

