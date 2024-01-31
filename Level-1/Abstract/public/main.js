document.getElementById("checkbox-btn").addEventListener("click", () => {
    document.getElementById('sub-container').classList.toggle('is-hidden');
});


document.getElementById('open-search-btn').addEventListener('click', () => {
    document.getElementById('header-section').classList.remove('bg-black');
    document.getElementById('user-search-form').classList.remove('is-hidden');
    document.getElementById('links-container').classList.add('is-hidden');
    document.getElementById('buttons-container').classList.add('is-hidden');
    document.getElementById('top-container-form').classList.add('is-transparent');
    document.getElementById('top-container-form').hidden = true;
});

document.getElementById('close-search-btn').addEventListener('click', () => {
    document.getElementById('header-section').classList.add('bg-black');
    document.getElementById('user-search-form').classList.add('is-hidden');
    document.getElementById('links-container').classList.remove('is-hidden');
    document.getElementById('buttons-container').classList.remove('is-hidden');
    document.getElementById('top-container-form').classList.remove('is-transparent');
    document.getElementById('top-container-form').hidden = false;
});