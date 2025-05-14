const certificados = [
    {
      titulo: "Azure AI Fundamentals",
      descricao: "Uso de IA na nuvem, visão computacional e modelos no Azure.",
      imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/1200px-Microsoft_Azure.svg.png",
      data: "Concluído: Mar 2023",
      link: "https://www.credly.com/badges/06925242-5abe-4641-b21a-b31f23c362c2/linked_in_profile"
    },
    {
      titulo: "Azure Fundamentals",
      descricao: "Conceitos fundamentais de nuvem e manipulação dos principais recursos de computação da Azure.",
      imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/1200px-Microsoft_Azure.svg.png",
      data: "Concluído: Fev 2023",
      link: "#"
    },
    {
      titulo: "Introduction to Intelligent Virtual Agents with IBM watsonX Assistant",
      descricao: "O curso ensina a criar e implementar chatbots inteligentes usando IA da IBM, abrangendo design de diálogos, integrações e análise de interações.",
      imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/800px-IBM_logo.svg.png",
      data: "Concluído: Ago 2024",
      link: "https://www.credly.com/badges/55727da4-b573-41a6-a6eb-20de881dc122/public_url"
    },
    {
      titulo: "Gen IA - Awari",
      descricao: "O curso GEN IA da Awari aborda fundamentos de inteligência artificial, machine learning e aplicações práticas, preparando profissionais para atuar na área de IA.",
      imagem: "https://awari.com.br/wp-content/uploads/2021/11/logo-awari.svg",
      data: "Concluído: Fev 2023",
      link: "#"
    },
    {
      titulo: "Mainframe Academia-Z",
      descricao: "Curso de Mainframe voltado à apresentar os principais conceitos de arquitetura Z.",
      imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/800px-IBM_logo.svg.png",
      data: "Concluído: Fev 2024",
      link: "#"
    },
    {
      titulo: "z/OS Mainframe Practitioner",
      descricao: "Certificação IBM sobre sistemas Mainframe e operações com z/OS.",
      imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/800px-IBM_logo.svg.png",
      data: "Concluído: Jan 2023",
      link: "https://www.credly.com/badges/37c3679d-1d7a-465b-96a4-7cad7309fb14"
    },
    {
      titulo: "Introduction to IBM z/OS",
      descricao: "O curso *Introduction to IBM z/OS* fornece uma visão geral do sistema operacional mainframe da IBM, cobrindo conceitos básicos, navegação e operações essenciais em ambientes z/OS.",
      imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/800px-IBM_logo.svg.png",
      data: "Concluído: Fev 2024",
      link: "#"
    },
    {
      titulo: "IT Essential - Cisco",
      descricao: "O curso IT Essentials da Cisco oferece fundamentos em hardware, software, redes e segurança, preparando para certificações como CompTIA A+ e suporte técnico em TI.",
      imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/1200px-Cisco_logo_blue_2016.svg.png",
      data: "Concluído: Ago 2022",
      link: "https://www.credly.com/badges/4dbf62e6-7bb2-4cd8-adeb-0d8c3037eafb/linked_in_profile"
    },
  ];

  document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".slider-container");
    const dotsContainer = document.querySelector(".slider-dots");

    certificados.forEach((cert, index) => {
      const slide = document.createElement("div");
      slide.classList.add("cert-slide");
      if (index === 0) slide.classList.add("active");

      slide.innerHTML = `
        <div class="cert-card">
          <div class="cert-logo">
            <img src="${cert.imagem}" alt="${cert.titulo}">
          </div>
          <h3>${cert.titulo}</h3>
          <p>${cert.descricao}</p>
          <div class="cert-footer">
            <span class="cert-date">${cert.data}</span>
            <a href="${cert.link}" class="cert-link" target="_blank">Ver Credencial</a>
          </div>
        </div>
      `;
      container.appendChild(slide);

      const dot = document.createElement("span");
      dot.classList.add("dot");
      if (index === 0) dot.classList.add("active");
      dotsContainer.appendChild(dot);
    });

    const slides = document.querySelectorAll(".cert-slide");
    const dots = document.querySelectorAll(".dot");
    const prevBtn = document.querySelector(".slider-nav.prev");
    const nextBtn = document.querySelector(".slider-nav.next");

    let currentIndex = 0;

    function showSlide(index) {
      container.style.transform = `translateX(-${index * 100}%)`;
      dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
   });
  }


    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
    });

    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    });

    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        currentIndex = i;
        showSlide(currentIndex);
      });
    });
  });