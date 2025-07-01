const projects = [
  {
    id: 1,
    title: "Intellipass",
    description: "Sistema de passagem de serviço projetado para integração com LLM",
    image: "images/ChatGPT Image 12 de mai. de 2025, 15_34_04.png",
    badge: "Desenvolvimento",
    tags: ["Flask", "HTML", "CSS", "JavaScript", "WatsonX"],
    link: "#"
  },
  {
    id: 2,
    title: "Aether Tech",
    description: "Landing Page de Startup inovadora",
    image: "images/capaAether.png",
    badge: "Desenvolvimento",
    tags: ["Flask", "HTML", "CSS", "JavaScript"],
    link: "#"
  },
  {
    id: 3,
    title: "MedImageX",
    description: "Projeto desenvolvido com o intuito de documentar a integração com os serviços cognitivos da Azure",
    image: "images/capamedImagex.png",
    badge: "Desenvolvimento",
    tags: ["Flask", "HTML", "CSS", "JavaScript"],
    link: "#"
  },
  {
    id: 4,
    title: "Projeto Personalidade",
    description: "Aplicação interativa para análise de personalidade baseada em IA, com previsão via modelo de machine learning, feedback personalizado e interface com streamlit",
    image: "images/White and Black Modern New Post Announcement Instagram Story.png",
    badge: "Desenvolvimento",
    tags: ["Scikit-learn", "Bagging", "Streamlit", "CSS"],
    link: "https://projetopersonalidad-xvye5zhedkgjqm5gdzayqf.streamlit.app/"
  },
];

function renderProjects() {
  const projectsGrid = document.querySelector('.projects-grid');
  
  projects.forEach(project => {
    const projectCard = document.createElement('article');
    projectCard.className = 'project-card';
    projectCard.innerHTML = `
    <div class="project-image">
      <img src="${project.image}" alt="${project.title}">
      <div class="project-badge">${project.badge}</div>
    </div>
    <div class="project-content">
      <h3>${project.title}</h3>
      <p class="project-excerpt">${project.description}</p>
      <div class="project-tech">
        ${project.tags.map(tag => `<span class="tech-tag">${tag}</span>`).join('')}
      </div>
    </div>
    <div class="project-hover">
      <a href="${project.link}" target="_blank" rel="noopener noreferrer">
        <button class="quick-view-btn">Visualizar</button>
      </a>
    </div>
  `;

    
    projectsGrid.appendChild(projectCard);
  });
}

// Chame a função quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', renderProjects);  