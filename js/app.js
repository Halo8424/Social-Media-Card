let root = $("#root");
let contentArea = $("<div>").attr("class","content-area");
let section = $("<section>").attr("class", "card");
let cardWrapper = $("<div>").attr("class", "card__wrapper");
let userImgSrc = "https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ";
let userJobTitle = "Feild Training Partner"
let userImg = $("<img>").attr("class", "card__user-img").attr("src", userImgSrc);
let cardInfo = $("<div>").attr("class", "card__info");
let cardName = $("<span>").attr("class", "card__name").text("Kesha King");
let cardTitle = $("<span>").attr("class", "card__title").text(userJobTitle);

cardInfo.append(cardName).append(cardTitle);
cardWrapper.append(userImg).append(cardInfo);
section.append(cardWrapper);
contentArea.append(section);
root.append(contentArea);













