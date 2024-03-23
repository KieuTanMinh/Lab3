import React,{useState} from "react";
import { Text,View,StyleSheet,Animated,TouchableOpacity } from "react-native";
export default function B3(){
    const [expanded,setExpanded]=useState(false);
    const [animation] = useState(new Animated.Value(60));//chieu cao ban dau header

    const thaydoiHeader=()=>{
        const initialValue = expanded ? 60 : 200;
        const finalValue = expanded ? 200 : 600;
        setExpanded(!expanded);
        animation.setValue(initialValue);
        Animated.spring(animation,{
            toValue: finalValue,
            useNativeDriver: false,
        }).start();
    };
    return(
        <View style={styles.container}>
            <Animated.View style={[styles.header,{height: animation}]}>
                <Text style={styles.headerText}>Mo rong header</Text>
            </Animated.View>
            <TouchableOpacity onPress={thaydoiHeader} style={styles.button}>
                <Text>{expanded ? 'Thu hep' : 'mo rong'}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    header:{
        width: '100%',
        backgroundColor:'blue',
        justifyContent:'center',
        alignItems:'center',
    },
    button:{
        marginTop: 20,
        padding:10,
        backgroundColor:'#000CCC',
    },
    headerText:{
        fontSize:20,
        fontWeight:'bold',
    },
});