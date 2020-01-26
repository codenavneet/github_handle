const enterval = document.querySelector("#search");
const searchhere = document.querySelector(".searchhere");
const handelname = document.querySelector(".main__profile-name");
const usernamehere = document.querySelector(".main__profile-username");
const biohere = document.querySelector(".main__profile-bio");
const avatarhere = document.querySelector(".main__profile-avatar");

const client_id = "01319fa104fdba83b317";
const client_secret = "ea7b443484333e4d0ee3f00e087160a42cf7ea4f";

const fetchUsers = async (user) => {
const api_call = await fetch(`https://api.github.com/users/${user}?client_id=${client_id}&client_secret=${client_secret}`);
const data = await api_call.json();
return { data }
};
const showData = () => {
    fetchUsers(enterval.value).then((res) => {
        console.log(res);
        usernamehere.innerHTML= `UserName : <span class="main__profile-username">${res.data.login}</span>`
        handelname.innerHTML= `Name : <span class="main__profile-name">${res.data.name}</span>`
        biohere.innerHTML= `Bio: <span class="main__profile-bio">${res.data.bio}</span>`
        avatarhere.innerHTML= `Avatar/Identicon: <span class="main__profile-avatar"><img src='${res.data.avatar_url}'></span>`
    })
}
searchhere.addEventListener("click" , () => {
    showData();
})