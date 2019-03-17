export default function hamburger() {

    const hamburger = document.querySelector(".hamburger");
    const navigation = document.querySelector(".navigation-list");


    if (hamburger.classList.contains("hamburger_active")) {
        hamburger.classList.remove("hamburger_active");
        navigation.classList.remove("navigation-list_active");
    } else {
        hamburger.classList.add("hamburger_active");
        navigation.classList.add("navigation-list_active");
    }
}