window.addEventListener("DOMContentLoaded", function () {
//Add event listener on button
    const inputBtn = document.getElementById("colorBtn");
    inputBtn.addEventListener("click",
        function () {
//Set up random colors
            const colors = ['#ee82ee', '#3cb371', '#00bfff', '#00ffff', '#7fffd4', "#1e90ff", "#6495ed", "#7b68ee", "#5f9ea0", "#4682b4", "#4169e1", "#0000ff", "#0000cd", "#00008b", "#000080", "#191970", '#6a5acd', '#483d8b'];
            for (let i = 0; i < 6; i++) {
                function setColor() {
                    const getRandomColor = colors[Math.floor(Math.random() * colors.length)];
                    document.getElementsByClassName('progress-bar')[i].style.background = getRandomColor;
                }
                setColor();
            }
        });
});
