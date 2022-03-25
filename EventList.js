import React, {Component} from 'react';
import { render } from 'react-dom';
import { Text,  AppRegistry, View, Image, StyleSheet} from 'react-native';
import { FlatList } from 'react-native';
import EventCard from './EventCard';
import DisplayAnImage from './images';

class EventList extends Component {
    state= {
        events:[]
    }

    componentDidMount (){
        const events = require('./Data.json').events;
        this.setState({events});
    }

    render(){
        return(
        <View>
            <View style = {styles.container}>
             <DisplayAnImage/>
                <FlatList
                data={this.state.events}
                renderItem= {({item}) => <EventCard eventItem={item}/>}  ></FlatList>
            </View>
        </View>
        );
    };  
};
const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
    },
}
);

export default EventList;