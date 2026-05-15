document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('submit');

    if (btn) {
        btn.addEventListener('click', function() {
            alert('Cette fonctionnalité est actuellement en développement. Veuillez réessayer plus tard.');
        });
    }
});
