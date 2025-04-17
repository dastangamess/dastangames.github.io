// Current language
let currentLang = localStorage.getItem('language') || 'en';

// Sample data for games and team members
const gamesData = [
  {
    title: { en: "Tuanna", az: "Tuanna" },
    description: {
      en: "Epic adventure through Caucasian mountains inspired by national hero Koroğlu",
      az: "Milli qəhrəman Koroğludan ilhamlanmış Qafqaz dağları boyu epik macəra"
    },
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    title: { en: "Shahnameh Chronicles", az: "Şahnamə Xronikaları" },
    description: {
      en: "Strategy RPG based on Ferdowsi's epic poem Shahnameh",
      az: "Firdovsinin Şahnamə epik poeması əsasında strategiya RPG"
    },
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    title: { en: "Baku Nights", az: "Bakı Gecələri" },
    description: {
      en: "Action-adventure game set in futuristic Baku city",
      az: "Gələcəkdə Bakı şəhərində keçən aksiya-macəra oyunu"
    },
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  }
];

//https://randomuser.me/api/portraits/men/75.jpg
const teamData = [
  {
    name: { en: "Nurlan Osmanov", az: "Nurlan Osmanov" },
    role: { en: "Developer", az: "Proqramçı" },
    image: "images/team/nurlan_xsolla.png"
  },
  {
    name: { en: "Tahir Yaqubov ", az: "Tahir Yaqubov" },
    role: { en: "Game Designer", az: "Oyun Dizayneri" },
    image: "images/team/tahir_xsolla.jpg"
  },
  {
    name: { en: "Qezenfer Safarov", az: "Qəzənfər Səfərov" },
    role: { en: "Developer", az: "Proqramçı" },
    image: "images/team/qezenfer_xsolla.png"
  },
  {
    name: { en: "Nicat Aliyev", az: "Nicat Əliyev" },
    role: { en: "2D Artist", az: "2D Rəssam" },
    image: "images/team/nicat_xsolla.jpg"
  },
  {
    name: { en: "Yadulla Mirzayev", az: "Yadulla Mirzəyev" },
    role: { en: "Developer", az: "Proqramçı" },
    image: "images/team/yadik_xsolla.jpg"
  },
  {
    name: { en: "Riad Valiyev", az: "Riad Vəliyev" },
    role: { en: "Developer", az: "Proqramçı" },
    image: "images/team/riad1_xsolla.jpg"
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
        <a href="#" class="btn">${currentLang === 'en' ? 'Play Now' : 'İndi Oyna'}</a>
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
    const memberCard = document.createElement('div');
    memberCard.className = 'team-member';
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

// When DOM is loaded
document.addEventListener('DOMContentLoaded', init);