import React,{Component} from "react"
import {View,StyleSheet,ActivityIndicatorIOS,ProgressBarAndroid,Platform} from "react-native"
import Spinner from "react-native-spinkit"

export default class Loading extends Component{
    static defaultProps = {
        color:"#333"
    }
    render(){
        // const spinner = Platform.OS === "ios"?<ActivityIndicatorIOS animating={true} {...this.props}/>:
        // <ProgressBarAndroid {...this.props}/>
        const spinner = <Spinner type="FadingCircleAlt" color={this.props.color} size={20}/>
        return (
            <View style={styles.loading}>{spinner}</View>
        )
    }
}

const styles = StyleSheet.create({
    loading:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})