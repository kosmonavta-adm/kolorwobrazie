import Gallery from '@/app/_components/Gallery/Gallery';

import { CATEGORIES, getImages } from '@/app/_utils/serverUtils';

const LandscapesPage = async () => {
    const images = await getImages(CATEGORIES.LANDSCAPES);

    return <Gallery data={images} />;
};

export default LandscapesPage;
