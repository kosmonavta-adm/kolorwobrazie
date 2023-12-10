import Gallery from '@/app/_components/Gallery/Gallery';

import { getImagesFromAllCategories } from '@/app/_utils/serverUtils';

const IndexPage = async () => {
    const images = await getImagesFromAllCategories();

    return <Gallery data={images} />;
};

export default IndexPage;
