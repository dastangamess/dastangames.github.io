// Current language
let currentLang = localStorage.getItem('language') || 'en';

// Sample data for games and team members
const gamesData = [
  {
    title: { en: "Tuana", az: "Tuana" },
    description: {
      en: "A resource management game with a story about the friendship between a little Turkish girl and her horse.",
      az: "Balaca bir türk qızı ilə atının dostluğunu anlatan bir hekayəli resurs menecment oyunu"
    },
    image: "images/games/tuana_xsolla.png",
    link: "https://hersai-studio.itch.io/tuana",
    released: true
  },
  {
    title: { en: "Rhythm of The Rain", az: "Rhythm of The Rain" },
    description: {
      en: "Complete the ritual by moving your body parts and receive a gift from the god!",
      az: "Bədən üzvlərini hərəkət etdirərək ritualı tamamla və tanrıdan hədiyyə al!"
    },
    image: "images/games/rhythm_of_the_rain_banner_xsolla.png",
    link: "https://pixelnodesstudio.itch.io/rhythm-of-the-rain",
    released: true

  },
  {
    title: { en: "Epic of Gorgud", az: "Epic of Gorgud" },
    description: {
      en: "Metroidvania game based on \"Epic of Dede Qorqud\"",
      az: "Gələcəkdə Bakı şəhərində keçən aksiya-macəra oyunu"
    },
    image: "images/games/epic_of_gorgud_xsolla.png",
    link: "#",
    released: false
  },
  {
    title: { en: "Legend Of The Simurg", az: "Legend Of The Simurg" },
    description: {
      en: "The little bird's adventure of searching for the Simurgh bird to save his village.",
      az: "Kiçik quşun kəndini xilas etmək üçün Simurq quşunu axtarmaq macərası"
    },
    image: "images/games/legend_of_the_simurg_xsolla.png",
    link: "#",
    released: false
  }
];

//https://randomuser.me/api/portraits/men/75.jpg
const teamData = [
  {
    name: { en: "Nurlan Osmanov", az: "Nurlan Osmanov" },
    role: { en: "Developer", az: "Proqramçı" },
    image: "images/team/nurlan_xsolla_new.jpg",
    link: "https://www.linkedin.com/in/nurlan-osmanov-30a8a7227/"
  },
  {
    name: { en: "Tahir Yaqubov ", az: "Tahir Yaqubov" },
    role: { en: "Game Designer", az: "Oyun Dizayneri" },
    image: "images/team/tahir_xsolla_new.jpg",
    link: "https://www.linkedin.com/in/tahir-yaqubov-7914b8295/"
  },
  {
    name: { en: "Gazanfar Safarov", az: "Qəzənfər Səfərov" },
    role: { en: "Developer", az: "Proqramçı" },
    image: "images/team/qezenfer_xsolla_new.jpg",
    link: "https://www.linkedin.com/in/qezenfer-seferov-628072207"
  },
  {
    name: { en: "Nicat Aliyev", az: "Nicat Əliyev" },
    role: { en: "2D Artist", az: "2D Rəssam" },
    image: "images/team/nicat_xsolla_new.jpg",
    link: "https://www.linkedin.com/in/nicat-%C9%99liyev-6a091a243/"
  },
  {
    name: { en: "Yadulla Mirzayev", az: "Yadulla Mirzəyev" },
    role: { en: "Developer", az: "Proqramçı" },
    image: "images/team/yadik_xsolla_new.jpg",
    link: "https://www.linkedin.com/in/yadulla-m-a84a41247/"
  },
  {
    name: { en: "Riad Valiyev", az: "Riad Vəliyev" },
    role: { en: "Developer", az: "Proqramçı" },
    image: "images/team/riad_xsolla_new.jpg",
    link: "https://www.linkedin.com/in/riad-veliyev-8ba04814b/"
  }
];

// Toggle language function
function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'az' : 'en';
  localStorage.setItem('language', currentLang);
  updateContent();
  renderGames();
  renderTeam();
}

// Update all text content based on current language
function updateContent() {
  document.querySelectorAll('[data-en]').forEach(el => {
    el.textContent = el.getAttribute(`data-${currentLang}`);
  });

  // Update hero text
  document.getElementById('hero-text').textContent = currentLang === 'en'
    ? 'We tell stories through games. Inspired by culture, powered by imagination.'
    : 'Biz hekayələri oyunlarla danışırıq. Mədəniyyətdən ilhamlanmış, təsəvvürlə gücləndirilmiş.';

  // Update explore button
  document.getElementById('explore-btn').textContent = currentLang === 'en'
    ? 'Explore Our Games' : 'Oyunlarımızı kəşf edin';
}

// Render games
function renderGames() {
  const gamesContainer = document.querySelector('.games-grid');
  gamesContainer.innerHTML = '';

  gamesData.forEach(game => {
    const gameCard = document.createElement('div');
    gameCard.className = 'game-card';
    gameCard.innerHTML = `
      <img src="${game.image}" alt="${game.title[currentLang]}" class="game-image">
      <div class="game-info">
        <h3>${game.title[currentLang]}</h3>
        <p>${game.description[currentLang]}</p>
        <a href=${game.link} target="${game.released ? '_blank' : ''}" class="btn">${currentLang === 'en' ? (game.released ? 'Play Now' : 'Soon...') : (game.released ? 'İndi Oyna' : 'Tezliklə') }</a>
      </div>
    `;
    gamesContainer.appendChild(gameCard);
  });
}

// Render team members
function renderTeam() {
  const teamContainer = document.querySelector('.team-grid');
  teamContainer.innerHTML = '';

  teamData.forEach(member => {
    const memberCard = document.createElement('a');
    memberCard.className = 'team-member';
    memberCard.href = member.link; // link sahəsi `teamData` içində olmalıdır
    memberCard.target = '_blank'; // yeni səhifədə açılsın
    memberCard.rel = 'noopener noreferrer';

    memberCard.innerHTML = `
      <img src="${member.image}" alt="${member.name[currentLang]}" class="member-image">
      <div class="member-info">
        <h3>${member.name[currentLang]}</h3>
        <p>${member.role[currentLang]}</p>
      </div>
    `;

    teamContainer.appendChild(memberCard);
  });
}


// Toggle mobile menu
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}

// Handle contact form submission
function handleFormSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
  alert(currentLang === 'en' 
    ? `Thank you ${name}! We'll contact you soon.` 
    : `Təşəkkürlər ${name}! Tezliklə sizinlə əlaqə saxlayacağıq.`);
  
  e.target.reset();
}

// Initialize the page
function init() {
  updateContent();
  renderGames();
  renderTeam();
  
  // Add event listeners
  document.querySelector('.contact-form').addEventListener('submit', handleFormSubmit);
  
  // Close mobile menu when clicking a link
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      const navLinks = document.querySelector('.nav-links');
      navLinks.classList.remove('active');
    });
  });
}

function updateContactContent() {
  document.querySelectorAll('[data-en]').forEach(el => {
    el.textContent = el.getAttribute(`data-${currentLang}`);
  });
}

// Əlaqə bölməsini də dil dəyişəndə yeniləmək üçün
document.addEventListener('DOMContentLoaded', () => {
  updateContactContent();
});
// When DOM is loaded
document.addEventListener('DOMContentLoaded', init);
