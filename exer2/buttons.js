const textArr = ["I'm Andy Vo and I'm a second-year Computer Science student from Lawrenceville, Georgia. It's nice to meet you!\n" +
"        <br>" +
"        <br>" +
"        In my free time, I enjoy working out at the CRC, hanging out with friends, and learning how to cook (though I still have a lot to learn!).",
"As a student at one of the best institutions in the nation, I'm passionate about learning and teaching others. In the past, I have volunteered at elementary schools, working with teachers and students to educate the students about computer science and the STEM field in general. Through my efforts, I hope to inspire others to recognize the joys of working in this field, hopefully making an impact on the world through the power of computer science!\n" +
"        <br>" +
"        <br>" +
"        In Bits of Good, I hope to contribute to the group with my skills in back-end development, as I am not the best at anything involving design. However, I do have some previous experience in front-end design from previous projects where I have worked as a full-stack developer. I'm hoping to help in any way possible, as I'm a fast learner and I'm always willing to learn new things."]

let curr = 0;
function switchImg() {
    if (curr === 0) {
        curr = 1;
        document.getElementById("boxText").innerHTML = textArr[1];
        document.getElementById("boxHead").innerHTML = "More About Me";
        document.getElementById("image1").classList.add("faded");
        document.getElementById("image1").onclick = function() {switchImg()};
        document.getElementById("image2").classList.remove("faded");
        document.getElementById("image2").onclick = function() {};
    } else {
        curr = 0;
        document.getElementById("boxText").innerHTML = textArr[0];
        document.getElementById("boxHead").innerHTML = "About Me";
        document.getElementById("image2").classList.add("faded");
        document.getElementById("image2").onclick = function() {switchImg()};
        document.getElementById("image1").classList.remove("faded");
        document.getElementById("image1").onclick = function() {};
    }
}