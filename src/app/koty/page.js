import Gallery from '@/app/_components/Gallery/Gallery';

import { CATEGORIES, getImages } from '@/app/_utils/serverUtils';

const CatsPage = async () => {
    const images = await getImages(CATEGORIES.CATS);

    return <Gallery data={images} />;
};

export default CatsPage;
