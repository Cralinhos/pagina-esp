function toggleContainer(acId) {
    const containers = document.querySelectorAll('.container');
    containers.forEach(container => {
        if (container.id === acId) {
            container.style.display = container.style.display === 'none' ? 'block' : 'none';
        } else {
            container.style.display = 'none';
        }
    });
}