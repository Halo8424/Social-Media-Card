let body = document.getElementsByTagName("body")[0];
let root = document.createElement('div');
root.classList.add("root");

body.prepend(root);

let contentDiv = document.createElement('div');
contentDiv.classList.add("content-area");

root.append(contentDiv);

let section = document.createElement("section");
section.classList.add("card");

contentDiv.append(section);

let cardWrapper = document.createElement("div");
cardWrapper.classList.add("card__wrapper");

section.append(cardWrapper);

let userImg = document.createElement("img");
userImg.classList.add("card__user-img");
userImg.src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ";

cardWrapper.append(userImg);




