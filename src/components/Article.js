import React from 'react';
import { View, 
         Linking, 
         TouchableOpacity,
         StyleSheet
       } from 'react-native';
import { Text, 
         Button,
         Card,
         Divider 
       } from 'react-native-elements';
import moment from 'moment';

export default class Article extends React.Component {
  render() {
    const {
      description,
      publishedAt,
      source,
      title,
      url,
      urlToImage
    } = this.props.article;
    const time = moment(publishedAt || moment.now()).fromNow();
    const defaultImg =
      'https://images.unsplash.com/photo-1484744358184-a8ce5e4af7ca?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=22ae4ab1b68c5644607a9656e909cb67&auto=format&fit=crop&w=1650&q=80';

    return (
      <TouchableOpacity
        onPress={() => Linking.openURL(url).catch(err => console.error('An error ocurred', err))}
      >
        <Card title={title}
          titleStyle={styles.titleStyle}
          image={{uri: urlToImage || defaultImg}}
        >
          <Text style={styles.description}>{description || 'Read More'}</Text>
          <Divider style={{ backgroundColor: '#b2bec3' }} />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.container}>{source.name}</Text>
            <Text style={styles.container}>{time}</Text>
          </View>
        </Card>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    marginHorizontal: 5,
    color: '#696969',
    fontSize: 18
  },
  container: {
    marginTop: 5,
    fontStyle: 'italic',
    color: '#696969',
    fontSize: 10
  },
  description: {
    marginBottom: 10,
    fontSize: 12
  }
});