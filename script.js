document.addEventListener("DOMContentLoaded", function() {
    const bttn = document.getElementById("btn");
    const btn2 = document.getElementById("btn2");
    const sgnupBx = document.getElementById("signup-bx");
    const bckBtn = document.getElementById("bck");
    const caBtn = document.getElementById("signupbx-btn");
    const eml = document.getElementById("email");
    const etx1 = document.getElementById("etxt1");
    const etx2 = document.getElementById("etxt2");
    const etx3 = document.getElementById("etxt3");
    const etx4 = document.getElementById("etxt4");
    const nme = document.getElementById("name");
    const pwrd = document.getElementById("password");
    const ckbx = document.getElementById("check");
    const clrBtn = document.getElementById("clr-btn");
    const thksBx = document.getElementById("thanks-bx");
    const sLink = document.getElementById("sgnup-lnk");

    sLink.addEventListener("click", function() {
        sgnupBx.style.visibility = "visible";
        window.scrollTo(0,0);   //to make page scroll to the top on click
        sgnupBx.style.overflowX = "hidden";
    })
    bttn.addEventListener("click", function() {
        sgnupBx.style.visibility = "visible";
    })
    bckBtn.addEventListener("click", function() {
        sgnupBx.style.visibility = "hidden";
    })
    btn2.addEventListener("click", function() {
        sgnupBx.style.visibility = "visible";
    })
    caBtn.addEventListener("click", function() {
        const emailValue = eml.value.trim();
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const pwValue = pwrd.value.trim();

        //to store user data
        const userData = {
            email: "",
            name: "",
            password: "",
            agreedToTerms: false
        };
        // Update user data
        userData.email = emailValue;
        userData.name = nme.value.trim();
        userData.password = pwValue;
        userData.agreedToTerms = ckbx.checked;

        if (emailValue === "") {
            etx1.style.opacity = "1";
        } else if (!emailPattern.test(emailValue)) {
            etx1.style.opacity = "1";
        } else {
            etx1.style.opacity = "0";
        }
        if (nme.value.trim() === "") {
            etx2.style.opacity = "1";
        } else {
            etx2.style.opacity = "0";
        }
        if (pwValue.length < 8) {
            etx3.style.opacity = "1";
        } else {
            etx3.style.opacity = "0";
        }
        if (!ckbx.checked) {
            etx4.style.opacity = "1";
        } else {
            etx4.style.opacity = "0";
            thksBx.style.visibility = "visible";
            // Clear input fields
            eml.value = "";
            nme.value = "";
            pwrd.value = "";
            ckbx.checked = false;          
        }
        clrBtn.addEventListener("click", function() {
            thksBx.style.visibility = "hidden";
        })
        console.log(userData);
    })
    

})