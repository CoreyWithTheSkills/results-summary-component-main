document.addEventListener('DOMContentLoaded', () => {
    const data = [
      {
        "category": "Reaction",
        "score": 80,
        "icon": "./assets/images/icon-reaction.svg"
      },
      {
        "category": "Memory",
        "score": 92,
        "icon": "./assets/images/icon-memory.svg"
      },
      {
        "category": "Verbal",
        "score": 61,
        "icon": "./assets/images/icon-verbal.svg"
      },
      {
        "category": "Visual",
        "score": 72,
        "icon": "./assets/images/icon-visual.svg"
      }
    ];
  
    data.forEach(item => {
      const category = item.category.toLowerCase(); // Convert category to lowercase
      const scoreElement = document.getElementById(category); // Select the <p> tag
      if (scoreElement) {
        scoreElement.innerHTML = `<strong>${item.score}</strong> / 100`; // Update the content
      }
    });
  });
  