async function fetchAndPopulateGallery() {
    const galleryContainer = document.getElementById('galleryContainer');

    // Mock data - Replace with your actual data retrieval logic
    const albums = [
        { folder: '01.Games', images: ['img1.jpg', 'img2.jpg', 'img3.jpg'] },
        { folder: 'Folder2', images: ['pic1.png', 'pic2.png'] },
    ];

    albums.forEach(album => {
        const albumSection = document.createElement('div');
        albumSection.classList.add('album-section');

        const albumTitle = document.createElement('h2');
        albumTitle.classList.add('h1');
        albumTitle.textContent = album.folder;

        const imagesContainer = document.createElement('div');
        imagesContainer.classList.add('d-flex', 'justify-content-center', 'flex-wrap');

        album.images.forEach(image => {
            const imageContainer = document.createElement('div');
            imageContainer.classList.add('p-2');

            const imgElement = document.createElement('img');
            imgElement.src = `${album.folder}/${image}`; // Assuming images are in folders
            imgElement.alt = image;
            imgElement.classList.add('gallery-image', 'mb-5');
            imgElement.loading = 'lazy';

            imageContainer.appendChild(imgElement);
            imagesContainer.appendChild(imageContainer);
        });

        albumSection.appendChild(albumTitle);
        albumSection.appendChild(imagesContainer);
        galleryContainer.appendChild(albumSection);
    });
}

// Call the function to fetch and populate the gallery
fetchAndPopulateGallery();
