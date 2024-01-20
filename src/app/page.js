import Gallery from '@/app/_components/Gallery/Gallery';

import { getImagesFromAllCategories } from '@/app/_utils/serverUtils';
import { shuffle } from '@/app/_utils/utils';

const IndexPage = async () => {
    const images = await getImagesFromAllCategories();
    const shuffledImages = shuffle(images);

    return <Gallery data={shuffledImages} />;
};

export default IndexPage;
