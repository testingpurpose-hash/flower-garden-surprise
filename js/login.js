function checkPassword()
{
    const pass =
    document.getElementById("password").value;

    const error =
    document.getElementById("error");

    const box =
    document.querySelector(".login-box");

    if(pass === "090109")
    {
        window.location.href =
        "pages/garden.html";
    }
    else
    {
        error.innerHTML =
        "Wrong Secret Code ❤️";

        box.classList.add("shake");

        setTimeout(() =>
        {
            box.classList.remove("shake");
        },400);
    }
}

document
.getElementById("password")
.addEventListener("keypress",
function(e)
{
    if(e.key==="Enter")
    {
        checkPassword();
    }
});