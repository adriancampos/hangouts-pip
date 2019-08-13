var container =document.querySelector('body > c-wiz > div > div.WOi1Wb > div.GhN39b > div > div > div.DQBC5d'); // TODO I should come up with a better selector
var newElement = document.createElement("span");
newElement.innerText = "picture_in_picture";
newElement.title = "Request picture in picture"
newElement.style.margin = "auto";
newElement.className = "COBM0b DPvwYc"; // material Icons
newElement.style.cursor = "pointer";
newElement.onclick = requestPIP;

container.insertBefore(newElement, container.firstChild);

function requestPIP() {
    document.querySelector('#yDmH0d > div.WOi1Wb > div.qMwJZe > div > video:not([style*="display: none"])').requestPictureInPicture();
}