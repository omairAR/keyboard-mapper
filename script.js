let key_code = document.getElementById("keys_put");




key_code.addEventListener("keydown", (event)=>{
    // handle keydown
     document.getElementById("k_p").innerHTML=event.key;
     document.getElementById("k_c").innerHTML=event.keyCode;
    console.log(event.key+""+event.keyCode)
})

key_code.addEventListener("keypress", (event) => {
    // handle keypress
});

key_code.addEventListener("keyup", (event) => {
    // handle keyup
});