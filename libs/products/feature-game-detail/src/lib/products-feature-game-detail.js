import { useState, useEffect } from 'react';
import './products-feature-game-detail.module.scss';
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardMedia,
} from '@material-ui/core';

import { formatRating } from '@nxegghead/products/util-formatters';

export function ProductsFeatureGameDetail(props) {
  const [state, setState] = useState({
    data: [],
    loadingState: 'success',
  });

  useEffect(() => {
    setState({
      ...state,
      loadingState: 'loading',
    });
    const { id: gameId } = props.match.params;
    fetch(`/api/games/${gameId}`)
      .then((x) => x.json())
      .then((res) => {
        console.log({ res });
        setState({
          ...state,
          data: res,
          loadingState: 'success',
        });
      })
      .catch((err) => {
        setState({
          ...state,
          loadingState: 'error',
        });
      });
  }, [props.match.params.id]);

  return (
    <div className="container">
      {state.loadingState === 'loading' ? (
        'Loading...'
      ) : state.loadingState === 'error' ? (
        <div>Error fetching data</div>
      ) : state.data == null ? (
        ''
      ) : (
        <Card>
          <CardActionArea>
            <CardMedia
              className="game-card-media"
              image={state.data.image}
              title={state.data.name}
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {state.data.name}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className="game-rating"
              >
                <strong>Rating:</strong> {formatRating(state.data.rating)}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      )}
    </div>
  );
}
export default ProductsFeatureGameDetail;
