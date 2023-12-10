import Gallery from '@/app/_components/Gallery/Gallery';

import { CATEGORIES, getImages } from '@/app/_utils/serverUtils';

const AngelsPage = async () => {
    const images = await getImages(CATEGORIES.ANGELS);

    return <Gallery data={images} />;
};

export default AngelsPage;
