import React from 'react';
import { Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { StyleSheet } from 'react-native';

const MyCard =({imagrURL, MainHead, subHead, mainContentComponent, footer, CardStyle}) => {
    return (
          <Card style={styles.container}>
            <CardItem >
              <Left>
                <Thumbnail source={{uri: imagrURL}} />
                <Body>
                  <Text>{MainHead}</Text>
                  <Text note>{subHead}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              {mainContentComponent}
            </CardItem>
            {footer && <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>{footer}</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>{footer}</Text>
                </Button>
              </Body>
              <Right>
                <Text>{footer}</Text>
              </Right>
            </CardItem>}
          </Card>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '80%',
    maxHeight: '50%',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    top: 120
  },
});

export default MyCard;