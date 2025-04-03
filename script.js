
const slider = document.getElementById("brightness-slider");
const light = document.getElementById("light");
const brightnessValue = document.getElementById("brightness-value");

slider.addEventListener("input", function() {
    light.style.opacity = this.value;
    brightnessValue.textContent = Math.round(this.value * 100) + "%";
});



// calender js

document.getElementById("set-schedule").addEventListener("click", function() {
    let scheduleTime = document.getElementById("schedule-time").value;
    if (scheduleTime) {
        document.getElementById("scheduled-time").innerText = "Scheduled for: " + new Date(scheduleTime).toLocaleString();
        alert("Schedule ho gaya!");
    } else {
        alert("Please select a time.");
    }
});

//  lux wale ka code
// const sliderContainer = document.getElementById('slider-container');
//         const sliderr = document.getElementById('slider');
//         const percentageText = document.getElementById('percentage');

//         sliderContainer.addEventListener('mousedown', (e) => {
//             function moveSlider(event) {
//                 let rect = sliderContainer.getBoundingClientRect();
//                 let offsetX = event.clientX - rect.left;
//                 let percentage = Math.min(Math.max(offsetX / rect.width * 100, 0), 100);
//                 sliderr.style.width = percentage + '%';
//                 percentageText.textContent = Math.round(percentage) + '%';
//             }

//             function stopDragging() {
//                 document.removeEventListener('mousemove', moveSlider);
//                 document.removeEventListener('mouseup', stopDragging);
//             }

//             moveSlider(e);
//             document.addEventListener('mousemove', moveSlider);
//             document.addEventListener('mouseup', stopDragging);
//         });