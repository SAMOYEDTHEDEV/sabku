let allNews = [];

fetch('news.json')
.then(res => res.json())
.then(data => {
  allNews = data;
  render(data);
});

function render(data){
  const container = document.getElementById('news-container');
  container.innerHTML = '';
  data.forEach(n => {
    container.innerHTML += `
      <div class="card">
        <h3>${n.title}</h3>
        <p>${n.date}</p>
      </div>
    `;
  });
}

document.getElementById('search').addEventListener('input', e => {
  const value = e.target.value.toLowerCase();
  const filtered = allNews.filter(n => 
    n.title.toLowerCase().includes(value)
  );
  render(filtered);
});