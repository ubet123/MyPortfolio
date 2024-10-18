
let skills=document.querySelector('.skills-list-content');

function displayskills(){
    skills.innerHTML='<h3>Frontend:</h3> <p> HTML, CSS, Bootstrap, JavaScript</p> <h3>Database:</h3> <p>MongoDB</p> <h3>Programming Languages:</h3> <p>C, C++ ,Java</p>'
};

function displayproj(){
    skills.innerHTML='<h3> Turning The Tide Website  </h3>  <h3>Ettarra Coffee House Website</h3> <h3> StudySync Website</h3> <h3> To-Do List </h3> <h3> Calculator </h3> <h3> Rock-Paper-Scissors</h3> ';
};

function displayedu(){
    skills.innerHTML='<h3>Fr. Conceicao Rodrigues College of Engineering</h3> <p>  B.Tech (Computer Engineering) ,2023-Current <br> Semester 1 : 9.89 <br> Semester 2: 9.18</p>   <h3> Vidyavardhinis Annasaheb Vartak College</h3> <p>   Junior College - Science ,2021-2023 <br>HSC Percentage : 81%</p>     <h3>  St. Joseph English School</h3> <p>   2011-2021<br> SSC Percentage : 97%</p>';
};

function submitdis(){
    alert('Thank You for Your Message :)');
}