// @name         Reddit Place - Chúpala gabacho
// @namespace    http://tampermonkey.net/
// @author       borjawork
if (window.top !== window.self) {
    window.addEventListener('load', () => {
            document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(
        (function () {
            const i = document.createElement("img");
            i.src = "https://github.com/Borjawork/redditplace/overlay.png";
            i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2000px;height: 2000px;";
            console.log(i);
            document.addEventListener("keydown", function(event) {
                if(event.key == "F4"){
                    if (i.style.display === "none") {
                        i.style.display = "block";
                    } else {
                        i.style.display = "none";
                    }
                }
            });
            return i;
        })())
    }, false);
}