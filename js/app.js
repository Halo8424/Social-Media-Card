let root = $("#root");
let contentArea = $("<div>").attr("class","content-area");
let section = $("<section>").attr("class", "card");
let cardWrapper = $("<div>").attr("class", "card__wrapper");

section.append(cardWrapper);
contentArea.append(section);
root.append(contentArea);













