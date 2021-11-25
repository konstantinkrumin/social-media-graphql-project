import React, { useContext } from 'react';
import { Grid, Transition, Dimmer, Loader } from 'semantic-ui-react';
import { useQuery } from '@apollo/client';

import { AuthContext } from '../context/auth';
import PostCard from '../components/PostCard';
import PostForm from '../components/PostForm';
import { FETCH_POSTS_QUERY } from '../util/graphql';

const Home = () => {
  const { user } = useContext(AuthContext);
  const { loading, data } = useQuery(FETCH_POSTS_QUERY);

  return (
    <Grid centered>
      <Grid.Row className="page-title">
        <h1>Recent Posts</h1>
      </Grid.Row>
      {loading ? (
        <Dimmer active inverted>
          <Loader size="massive" inverted content="Loading posts..." />
        </Dimmer>
      ) : (
        <Grid.Row>
          {user && (
            <Grid.Column computer={5} tablet={16} mobile={16}>
              <PostForm />
            </Grid.Column>
          )}
          <Transition.Group>
            {data.getPosts &&
              data.getPosts.map((post) => (
                <Grid.Column key={post.id} computer={5} tablet={8} mobile={16} style={{ marginBottom: 20 }}>
                  <PostCard post={post} />
                </Grid.Column>
              ))}
          </Transition.Group>
        </Grid.Row>
      )}
    </Grid>
  );
};

export default Home;
