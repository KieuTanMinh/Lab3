import { View, Text, Animated, Dimensions, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'

const B1 = () => {
    const position = useRef(new Animated.ValueXY({ x: 0, y: 0 }));
    const windowHeight = Dimensions.get('window').height;
    const [isAnimating, setIsAnimating] = useState(false); // State để theo dõi trạng thái animation

    useEffect(()=> {
        if(isAnimating) {
            startAnimation();
        }
    }, [isAnimating]); // Thêm dependency là isAnimating

    const startAnimation = () => {
        if (isAnimating) {
            const randomY = Math.floor(Math.random() * windowHeight);
            Animated.timing(position.current, {
                toValue: { x: 0, y: randomY },
                duration: 3000,
                useNativeDriver: true,
            }).start(() => {
                if (isAnimating) { // Kiểm tra nếu vẫn đang chạy animation thì tiếp tục lặp
                    startAnimation();
                }
            });
        }
    }
    const handlePress = () => {
        setIsAnimating(!isAnimating); // Đảo ngược trạng thái khi nhấn vào nút
    }

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.box, { transform: position.current.getTranslateTransform()}]}>
               
            </Animated.View>
            <TouchableOpacity onPress={handlePress} style={styles.button}>
             {/* Hiển thị nút dựa trên trạng thái animation */}
             <Text>{isAnimating ? 'Dừng' : 'Chạy'}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
     
    },
    box: {
        width: 50, 
        height: 50,
        backgroundColor: 'lightblue'
    },
    button:{
        marginTop: 20,
        padding:10,
        backgroundColor:'#000CCC',
    }
})

export default B1
