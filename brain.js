let form = document.getElementById("form");
let input = document.getElementById("text");
let msg = document.getElementById("msg");
let post = document.querySelector(".post");
let option = document.querySelector(".option");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("button clicked");
  formValidation();

});
let formValidation = () => {
  if (input.value === "") {
    msg.innerHTML = "post cannot be empty";
    console.log("failure");
  } else {
    console.log("success");
    msg.innerHTML = "";
    dataStore();
   
  }
};
let data = "";
let dataStore = () => {
  data = input.value;
  console.log(data);
  createPost();

};
let createPost = () => {
  post.innerHTML += `
<div>
<p>${data}</p>
<span class="option"><ion-icon name="trash" onClick="deletePost(this)"></ion-icon>
 <ion-icon name="create" id="update" onClick="updatePost(this)"></ion-icon></span>
</div>
`;
  input.value = "";
 
};
let deletePost = (e) => {
  e.parentElement.parentElement.remove();
  console.log("delete pushed");
};
let updatePost = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML;

  e.parentElement.parentElement.remove();
};
