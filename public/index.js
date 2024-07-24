async function getHash(event){
    event.preventDefault();
    let data = document.getElementById("inputString").value;
    let hash = await axios.post("http://localhost:4000",data);
    //console.log(hash);
    document.getElementById("result").innerHTML = hash.data;
}

document.addEventListener("DOMContentLoaded", () => {
    let button = document.getElementById("gen");
    button.addEventListener("click", getHash);
});