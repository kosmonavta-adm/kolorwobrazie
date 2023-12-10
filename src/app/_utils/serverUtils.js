import fs from 'fs/promises';
import path from 'path';

export const getImages = async (category) => {
    const dir = path.resolve('./public', 'gallery', category);
    const data = await fs.readdir(dir);
    const images = data.map((name) => {
        const nameWithoutExtension = name.split('.')[0];
        return {
            key: crypto.randomUUID(),
            src: `/gallery/${category}/${name}`,
            name: nameWithoutExtension,
        };
    });

    return images;
};

export const getImagesFromAllCategories = async () => {
    const allCategoriesData = await Promise.all(
        Object.values(CATEGORIES).map(async (category) => {
            const dir = path.resolve('./public', 'gallery', category);
            const data = await fs.readdir(dir);
            const result = {
                data,
                category,
            };
            return result;
        })
    );

    const images = allCategoriesData.reduce((result, { data, category }) => {
        data.forEach((name) => {
            const nameWithoutExtension = name.split('.')[0];
            result.push({
                key: crypto.randomUUID(),
                src: `/gallery/${category}/${name}`,
                name: nameWithoutExtension,
            });
        });
        return result;
    }, []);

    return images;
};

export const CATEGORIES = {
    ANGELS: 'anioly',
    CATS: 'koty',
    LANDSCAPES: 'krajobrazy',
    FLOWERS: 'kwiaty',
};
