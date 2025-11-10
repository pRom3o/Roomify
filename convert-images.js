import fs from 'fs';
import path from 'path';
import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';

// Folder where your images are
const imagesFolder = './public/Images';
const outputFolder = './public/ImagesWebP';

async function convertImages() {
    if (!fs.existsSync(outputFolder)) fs.mkdirSync(outputFolder);

    const files = fs.readdirSync(imagesFolder).filter((file) => /\.(jpg|jpeg|png)$/i.test(file));

    for (const file of files) {
        await imagemin([path.join(imagesFolder, file)], {
            destination: outputFolder,
            plugins: [
                imageminWebp({ quality: 80 }), // adjust quality if needed
            ],
        });
    }
}

convertImages();
