// Arrays and array setup
const fullProjectArray = [
    ['Tribute to Nellie Bly', 'https://res.cloudinary.com/sefrz/image/upload/v1522249871/JfG87BH.png', 'https://codepen.io/chris-simmons/pen/xWdZGz'],
    ['Color Theme Generator', 'https://res.cloudinary.com/sefrz/image/upload/v1522249867/IRtacCv.png', 'https://codepen.io/chris-simmons/full/aYLWex/'],
    ['Random Quote Generator', 'https://res.cloudinary.com/sefrz/image/upload/v1522249867/UmJRLud.png', 'https://codepen.io/chris-simmons/full/JLrNZx/'],
    ['Weather App', 'https://res.cloudinary.com/sefrz/image/upload/v1522249869/CnNz8aX.png', 'https://codepen.io/chris-simmons/full/rdYyve/'],
    ['Wikipedia Viewer', 'https://res.cloudinary.com/sefrz/image/upload/v1522249867/wiki_screenshot.png', 'https://codepen.io/chris-simmons/full/EEogKx/'],
    ['Twitch Stream Checker', 'https://res.cloudinary.com/sefrz/image/upload/v1522452873/twitch.png', 'https://codepen.io/chris-simmons/full/KoQLGp/'],
    ['The Law Offices of Christopher Simmons', 'https://res.cloudinary.com/sefrz/image/upload/v1522249871/i84Xejg.png', 'https://www.virtualimmigrationlaw.com'], ['Calculator', 'https://res.cloudinary.com/sefrz/image/upload/v1522617287/calculator.png', 'https://codepen.io/chris-simmons/full/XEqMOG/'], ['Pokemon Pomodoro Clock', 'https://res.cloudinary.com/sefrz/image/upload/v1522647514/pomodoro.png', 'https://codepen.io/chris-simmons/full/gezQdJ/'],
    ['Tic-Tac-Toe', 'https://res.cloudinary.com/sefrz/image/upload/v1522883334/ttt.png', 'https://codepen.io/chris-simmons/full/pLOvdE/'], ['Simon Game', 'http://res.cloudinary.com/sefrz/image/upload/v1522959390/simon.png', 'https://codepen.io/chris-simmons/full/dmqZYX/'], ['Sherlock Travel Helper', 'https://res.cloudinary.com/sefrz/image/upload/v1522965815/28423405_10211450894612687_2909747668321031098_o.jpg','https://github.com/SefrZ/SherlockTravelHelper'], ['Double Pendulum', 'https://res.cloudinary.com/sefrz/image/upload/v1523001378/pendulum.png', 'https://codepen.io/chris-simmons/full/rdqYqB/'], ['Particles with Gravity', 'https://res.cloudinary.com/sefrz/image/upload/v1523047878/particles.png', 'https://codepen.io/chris-simmons/full/XExQJb/'], ['Maze Generator Game', 'https://res.cloudinary.com/sefrz/image/upload/v1523166558/maze.png', 'https://codepen.io/chris-simmons/full/zWMJbN/'], ['Star Field', 'https://res.cloudinary.com/sefrz/image/upload/v1523227754/Star_field.png', 'https://codepen.io/chris-simmons/full/vRvGNa/'], ['Rain', 'https://res.cloudinary.com/sefrz/image/upload/v1523233143/rain.png', 'https://codepen.io/chris-simmons/full/yKGJxq/'], ['General Restaurant Website', 'https://res.cloudinary.com/sefrz/image/upload/v1523386483/restaurant.png', 'https://codepen.io/chris-simmons/project/full/DNKLaG/'], [
      'Star Field Tutorial', 'https://res.cloudinary.com/sefrz/image/upload/v1523470528/stars.png', 'https://codepen.io/chris-simmons/full/xWBEjx/'
    ], ['Matrix Rain', 'https://res.cloudinary.com/sefrz/image/upload/v1523548734/matrix.png', 'https://codepen.io/chris-simmons/full/PRgNEe/'], ['Basic Chase Bot', 'https://res.cloudinary.com/sefrz/image/upload/v1525204015/vector.png', 'https://codepen.io/chris-simmons/full/rvmBEY/']
  ];
  const sortedArray = fullProjectArray.sort();
  
  // Document Elements
  const projectGrid = document.getElementById('gridFullProject');
  const education0 = document.getElementById('education0');
  const education1 = document.getElementById('education1');
  const education2 = document.getElementById('education2');
  const languages = document.getElementById('languages');
  const experience = document.getElementById('experience');
  const mainWindow = document.getElementById('mainWindow');
  
  // Variables
  let width = document.documentElement.clientWidth;
  let canHeight = mainWindow.clientHeight;
  
  // Global settings for rain. Note, this is setup only for wind to be positive. If negative, the 'this.x > width+40' will need to be changed to 'this.x < -40'.
  let drops = [];
  const maxDrops = 750;
  const g = 1;
  const wind = 3;
  
  // Canvas
  const canvas = document.getElementById('canvas');
  const c = canvas.getContext('2d');
  
  for (let i = 0; i < sortedArray.length; i++) {
    let projectItem = document.createElement('div');
    projectItem.className = 'projectItem';
    projectGrid.appendChild(projectItem);
  
    let projectImg = document.createElement('img');
    projectImg.className = 'fullProjImg';
    projectImg.src=sortedArray[i][1];
    projectItem.appendChild(projectImg);
  
    let projectLink = document.createElement('a');
    projectLink.className = 'fullProjLink';
    projectLink.setAttribute('target', '_blank');
    projectLink.href = sortedArray[i][2];
    projectLink.innerHTML = sortedArray[i][0];
    projectItem.appendChild(projectLink);
  
  }
  
  function textChange () {
    if ((width > 1895) || (width > 857 && width < 889)) {
      education0.innerHTML = 'Front End Development Certificate from Free Code Camp</br>&nbsp&nbsp&nbsp&nbsp&nbspApril 2018';
      education1.innerHTML = 'Juris Doctor from The John Marshall Law School</br>&nbsp&nbsp&nbsp&nbsp&nbspFocused on International Law, International Human Rights Law, and Immigration Law</br>&nbsp&nbsp&nbsp&nbsp&nbspJune 2017';
      education2.innerHTML = 'Bachelor of Arts in International Studies from Georgia Southern Univerisity</br>&nbsp&nbsp&nbsp&nbsp&nbspFocused on Environmentalism, Development, and Culture</br>&nbsp&nbsp&nbsp&nbsp&nbspDecember 2013';
      languages.innerHTML = 'Native English</br>Intermediate proficiency in French</br>Elementary proficiency in Arabic</br>Working proficiency in the following: HTML, CSS, Java, JavaScript, jQuery, GDScript</br>Knowledge of the following: PHP, Swift, SQL/SQLite';
      experience.innerHTML = 'Freelance/Independent Contractor at Various<span style="float:right">December 2017 – Present</span></br>Adjunct Professor at The John Marshall Law School<span style="float:right">August 2017 – December 2017</span></br>Clinical Student at The JMLS International Human Rights Clinic<span style="float:right">January 2016 – December 2016</span></br>Teaching Assistant at The John Marshall Law School<span style="float:right">August 2015 – December 2015</span>';
    } else {
      education0.innerHTML = 'Front End Development Certificate from Free Code Camp</br>&nbsp&nbsp&nbsp&nbsp&nbspApril 2018';
      education1.innerHTML = 'Juris Doctor from The John Marshall Law School</br>&nbsp&nbsp&nbsp&nbsp&nbspFocused on International Law, International Human Rights Law, and Immigration Law</br>&nbsp&nbsp&nbsp&nbsp&nbspJune 2017';
      education2.innerHTML = 'Bachelor of Arts in International Studies from Georgia Southern Univerisity</br>&nbsp&nbsp&nbsp&nbsp&nbspFocused on Environmentalism, Development, and Culture</br>&nbsp&nbsp&nbsp&nbsp&nbspDecember 2013';
      languages.innerHTML = 'Native English</br>Intermediate proficiency in French</br>Elementary proficiency in Arabic</br>Working proficiency in the following: HTML, CSS, Java, JavaScript, jQuery, GDScript</br>Knowledge of the following: PHP, Swift, SQL/SQLite';
      experience.innerHTML = 'Freelance/Independent Contractor at Various</br>&nbsp&nbsp&nbsp&nbsp&nbspDecember 2017 – Present</br>Adjunct Professor at The John Marshall Law School</br>&nbsp&nbsp&nbsp&nbsp&nbspAugust 2017 – December 2017</br>Clinical Student at The JMLS International Human Rights Clinic</br>&nbsp&nbsp&nbsp&nbsp&nbspJanuary 2016 – December 2016</br>Teaching Assistant at The John Marshall Law School</br>&nbsp&nbsp&nbsp&nbsp&nbspAugust 2015 – December 2015';
    }
  }
  
  textChange();
  
  // Setup canvas
  canvas.height = canHeight;
  canvas.width = width;
  
  // Create individual raindrops
  function Rain(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.speed = this.z * g;
  
    this.draw = function() {
      // Rain
      /*c.beginPath();
          c.strokeStyle = 'rgba(124,124,223,.4)'
          c.lineWidth = this.z/2
          c.moveTo(this.x, this.y);
          c.lineTo(this.x+wind, this.y+(this.z*7));
          c.stroke();*/
  
      // Snow
      c.beginPath();
      c.strokeStyle = 'rgba(251,252,252,4)';
      c.fillStyle = 'rgba(232,236,242,.7)';
      c.arc(this.x, this.y, this.z/1.2, Math.PI*2, false);
      c.fill();
      c.stroke();
    }
  
    this.update = function() {
      this.x += wind
      this.y += this.speed;
  
      if (this.y > canHeight+40) {
        this.y = -Math.random()*canHeight;
      }
      if (this.x > width+40) {
        this.x = -Math.random()*width;
      }
    }
  }
  
  // Generate raindrops
  for (var i = 0; i < maxDrops; i++) {
    var x = Math.random()*width;
    var y = -Math.random()*canHeight;
    var z = Math.sqrt(Math.random() * 5) +1;
  
    drops.push(new Rain(x, y, z))
  }
  
  // Animate
  function animate() {
    c.clearRect(0, 0, width, canHeight);
  
    for (var i = 0; i < drops.length; i++) {
      drops[i].draw();
      drops[i].update();
    }
  
    requestAnimationFrame(animate);
  }
  
  animate();
  
  // Resize window
  window.addEventListener('resize', function(){
    width = document.documentElement.clientWidth;
    canHeight = mainWindow.clientHeight;
  
    canvas.height = canHeight;
    canvas.width = width;
  
    textChange();
  }, true);