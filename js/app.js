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
let cardSocials = $("<div>").attr("class", "card__socials");
let faceBookCard = $("<div>").attr("class", "card__icon card__icon--fb");
let cardIconBoxFb = $("<span>").attr("class", "card__icon-box");
let faceBookIcon = $("<i>").attr("class", "fab fa-facebook-f");
let cardIconTitleFb = $("<span>").attr("class", "card__icon-title").text("Facebook");
let instagramCard = $("<div>").attr("class", "card__icon card__icon--ig");
let cardIconBoxInstagram = $("<span>").attr("class", "card__icon-box");
let instagramIcon = $("<i>").attr("class", "fab fa-instagram");
let cardIconTitleInstagram = $("<span>").attr("class", "card__icon-title").text("Instagram")


cardIconBoxInstagram.append(instagramIcon);
instagramCard.append(cardIconBoxInstagram, cardIconTitleInstagram);


cardIconBoxFb.append(faceBookIcon);
faceBookCard.append(cardIconBoxFb,cardIconTitleFb);
cardSocials.append(faceBookCard,instagramCard);

cardInfo.append(cardName).append(cardTitle);
cardWrapper.append(userImg).append(cardInfo).append(cardSocials);
section.append(cardWrapper);
contentArea.append(section);
root.append(contentArea);













