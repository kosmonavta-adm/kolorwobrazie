import Gallery from '@/app/_components/Gallery/Gallery';

import { CATEGORIES, getImages } from '@/app/_utils/serverUtils';

const FlowersPage = async () => {
    const images = await getImages(CATEGORIES.FLOWERS);

    return <Gallery data={images} />;
};

export default FlowersPage;
