// Primeiro, inclua a biblioteca Chart.js no seu HTML:
// <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

document.addEventListener('DOMContentLoaded', function() {
  const ctx = document.getElementById('barChart').getContext('2d');
  
  // Dados de exemplo - substitua com seus próprios dados
  const data = {
    labels: ['Python', 'SQL', 'ETL', 'DataViz', 'Machine Learning', "Engenharia de Dados"],
    datasets: [{
      label: 'Nível de Habilidade',
      data: [85, 70, 70, 70, 75,80],
      backgroundColor: [
        'rgba(187, 134, 252, 0.7)',
        'rgba(55, 0, 179, 0.7)',
        'rgba(100, 100, 255, 0.7)',
        'rgba(148, 100, 199, 0.7)',
        'rgba(150, 150, 255, 0.7)',
        'rgba(125, 177, 210, 0.7)',
      ],
      borderColor: [
        'rgba(187, 134, 252, 1)',
        'rgba(55, 0, 179, 1)',
        'rgba(100, 100, 255, 1)',
        'rgba(200, 50, 150, 1)',
        'rgba(150, 150, 255, 1)'
      ],
      borderWidth: 1
    }]
  };

  // Configurações responsivas
  const config = {
    type: 'bar',
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top',
          labels: {
            font: {
              size: window.innerWidth < 768 ? 12 : 14
            }
          }
        },
        tooltip: {
          enabled: true
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            font: {
              size: window.innerWidth < 768 ? 10 : 12
            }
          }
        },
        x: {
          ticks: {
            font: {
              size: window.innerWidth < 768 ? 10 : 12
            }
          }
        }
      }
    }
  };

  // Cria o gráfico
  const barChart = new Chart(ctx, config);

  // Redimensionamento responsivo
  window.addEventListener('resize', function() {
    barChart.resize();
  });
});