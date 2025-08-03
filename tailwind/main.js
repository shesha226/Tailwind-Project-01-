 let showingSet1 = true;

  function switchCards() {
    const set1 = document.getElementById('set1');
    const set2 = document.getElementById('set2');
    const btn = document.getElementById('toggleBtn');

    if (showingSet1) {
      set1.classList.add('hidden');
      set2.classList.remove('hidden');
      btn.textContent = 'Show Previous';
    } else {
      set2.classList.add('hidden');
      set1.classList.remove('hidden');
      btn.textContent = 'Show More';
    }

    showingSet1 = !showingSet1;
}
 


    const toggleButtons = document.querySelectorAll('.toggleBtn');

    toggleButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const desc = btn.closest('.faq-item').querySelector('.description');
        desc.classList.toggle('hidden');
        btn.textContent = desc.classList.contains('hidden') ? '+' : '−';
      });
    });

