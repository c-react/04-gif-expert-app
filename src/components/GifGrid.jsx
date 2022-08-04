import PropTypes from 'prop-types';
import { GifItem } from './index';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            {
                isLoading && (<h2>Loading...</h2>)
            }
            <h3>{category}</h3>
            <div className="card-grid">
                {
                    images.map((image) => (
                        <GifItem
                            key={image.id}
                            {...image}
                        />
                    ))
                }
            </div>

        </>
    );
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}