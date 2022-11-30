let unreadMessages = document.getElementsByClassName("unread");
let numberOfUnreadMessages = document.getElementsByClassName("unread").length;
const markAllAsRead = document.getElementsByClassName("header-para")[0];
let numberOfNotifications = document.getElementsByClassName("notification-number")[0];
const icons = document.getElementsByClassName("fas");


markAllAsRead.addEventListener("click", function() {
    for (let i = 0; i < numberOfUnreadMessages; i++) {
        unreadMessages[i].style.backgroundColor = "white";
        numberOfNotifications.innerHTML = "0";
        icons[i].style.display = "none";
    }
})

for (let j = 0; j < numberOfUnreadMessages; j++) {
    unreadMessages[j].addEventListener("click", function () {
        if (unreadMessages[j].style.backgroundColor = "hsl(210, 60%, 98%)") {
            unreadMessages[j].style.backgroundColor = "white";
            icons[j].style.display = "none";
            if (numberOfNotifications.innerHTML > 0) {
                let updatedNumberOfNotifications = numberOfNotifications.innerHTML - 1;
                numberOfNotifications.innerHTML = updatedNumberOfNotifications;
            } else {
                numberOfNotifications.innerHTML = "0";
            }
        }
    })    
}