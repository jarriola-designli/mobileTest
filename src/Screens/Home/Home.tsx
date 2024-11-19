import {useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {Layout, Divider, List} from '@ui-kitten/components';

import {useHome} from '../../hooks';
import {type Products} from '../../Infrastructure/products/types';
import {StyleSheet} from 'react-native';

const Home = () => {
  const {renderItem, getData, products} = useHome();

  useFocusEffect(
    useCallback(() => {
      getData(true);
    }, []),
  );

  return (
    <Layout
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <List
        style={styles.container}
        data={products as unknown as Products[]}
        ItemSeparatorComponent={Divider}
        renderItem={renderItem}
        onEndReached={() => getData(false)}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
});

export default Home;
