import Gallery from '@/app/_components/Gallery/Gallery';

import { CATEGORIES, getImages } from '@/app/_utils/serverUtils';

const OtherPage = async () => {
    const images = await getImages(CATEGORIES.OTHER);

    return <Gallery data={images} />;
};

export default OtherPage;
