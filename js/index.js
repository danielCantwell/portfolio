
// Remove the 'preload' class from the root to indicate to css that the page has loaded.
window.onload = () => {
    document.getElementById('root').classList.remove('preload');
};