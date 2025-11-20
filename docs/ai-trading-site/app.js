const toggles = document.querySelectorAll('.toggle');
const prices = document.querySelectorAll('.price');

function setBilling(plan) {
  toggles.forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.plan === plan);
  });

  prices.forEach((price) => {
    const monthly = price.dataset.monthly;
    const yearly = price.dataset.yearly;
    price.textContent = plan === 'yearly' ? yearly : monthly;
  });
}

toggles.forEach((btn) => {
  btn.addEventListener('click', () => setBilling(btn.dataset.plan));
});

setBilling('monthly');
