const userName=document.getElementById("text");
const search=document.getElementById("user-name");
const name=document.getElementById("name");
const repos=document.getElementById("repos");
const user_name=document.getElementById("user-Name");
const url=document.getElementById("url");
const client_id="Iv1.e9557ff77c3b5255";
const client_secreat="656f26d1cc36016222b25d3b4a5fe676a406cb34";
console.log(userName.value);

const fetchUser= async (user)=>{
const api_call=await fetch(`https://api.github.com/users/${user}?client_id=${client_id}&client_secreat=${client_secreat}`);
const data=await api_call.json();
return {data:data};
};



const showData=()=>{
fetchUser(userName.value).then((res)=>{
     if(res.data.message!='Not Found'){

    console.log(res);
    name.innerHTML=`Name: <span style="color:white">${res.data.name}</span>`;
    repos.innerHTML=`Repos: <span style="color:white">${res.data.public_repos}</span>`;
    user_name.innerHTML=`Username: <span style="color:white">${res.data.login}</span>`;
    url.innerHTML=`URL: <span style="color:white">${res.data.html_url}</span>`;
     }

    else{
    alert("Invalid user-name")
} 
});
};

search.addEventListener('click',()=>{
showData();
})
