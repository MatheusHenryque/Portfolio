  document.addEventListener('DOMContentLoaded', function() {
    // Configuração do Gráfico
    const ctx = document.getElementById('skillsChart').getContext('2d');
    
    new Chart(ctx, {
      type: 'radar',
      data: {
        labels: [
          'Python',
          'SQL',
          'ETL',
          'Visualização',
          'Machine Learning',
          'Engenharia de dados'
        ],
        datasets: [{
          label: 'Minha Proficiência',
          data: [90, 80, 70, 76, 85, 80],
          backgroundColor: 'rgba(187, 134, 252, 0.2)',
          borderColor: 'rgba(187, 134, 252, 1)',
          borderWidth: 2,
          pointBackgroundColor: 'rgba(187, 134, 252, 1)',
          pointRadius: 4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          r: {
            angleLines: {
              color: 'rgba(255, 255, 255, 0.1)'
            },
            grid: {
              color: 'rgba(255, 255, 255, 0.1)'
            },
            suggestedMin: 0,
            suggestedMax: 100,
            ticks: {
              backdropColor: 'transparent',
              color: '#fff',
              font: {
                size: 10
              }
            },
            pointLabels: {
              color: '#fff',
              font: {
                size: 12
              }
            }
          }
        },
        plugins: {
          legend: {
            labels: {
              color: '#fff',
              font: {
                size: 12
              }
            }
          }
        }
      }
    });
  });

  