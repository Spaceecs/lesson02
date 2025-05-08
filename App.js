import {StyleSheet, Text, View, StatusBar, SafeAreaView, Image, Button} from 'react-native';
// import {StatusBar as StatusBarExpo} from 'expo-status-bar';
// import styled from 'styled-components/native'
import {useState} from "react";

//ex1
// export default function App() {
//     return (
//         <View>
//             <Text style={styles.header}>React</Text>
//             <StatusBar style="auto"/>
//         </View>
//     );
// }
// const styles = StyleSheet.create({
//     header: {
//         marginTop: 45,
//         color: 'white',
//         backgroundColor: 'gray',
//         fontSize: 24,
//         textAlign: 'center',
//         borderRadius: 10,
//         marginHorizontal: 20,
//     }
// });

//ex2
// export default function App() {
//     return (
//         <View style={styles.container}>
//             <Text style={styles.header}>ReactNative!!!</Text>
//             <Text style={styles.subHeader}>React</Text>
//             <StatusBar style="auto"/>
//         </View>
//     );
// }
// const styles = StyleSheet.create({
//     container: {
//         marginTop: 50,
//         backgroundColor: '#386b8c',
//         flex: 1,
//     },
//     header: {
//         backgroundColor: 'gray',
//     },
//     subHeader: {
//         color: 'red',
//     },
// });
//ex3
// export default function App() {
//     return (
//         <View style={styles.container}>
//             <Text style={styles.header}>ReactNative!!!</Text>
//             <Text style={styles.header}>ReactNative!!!</Text>
//         </View>
//     );
// }
// const styles = StyleSheet.create({
//     container: {
//         marginTop: 50,
//         backgroundColor: '#386b8c',
//         flex: 1,
//     },
//     header: {
//         // width: 50,
//         width: '30%',
//         padding: 10,
//         backgroundColor: 'gray',
//     },
// });
//ex4
// export default function App() {
//     return (
//         <View style={styles.container}>
//             <View style={styles.topView}>
//                 <Text style={styles.text}>ReactNative!!!</Text>
//             </View>
//             <View style={styles.bottomView}>
//                 <Text style={styles.text}>ReactNative!!!</Text>
//             </View>
//         </View>
//     );
// }
// const styles = StyleSheet.create({
//     container: {
//         marginTop: 50,
//         flex: 1,
//         // flexDirection: 'row'
//     },
//     text: {
//         // width: 50,
//         width: '30%',
//         padding: 10,
//     },
//     topView: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: 'yellow',
//
//     },
//     bottomView: {
//         flex: 1,
//         backgroundColor: 'blue'
//     },
// });


//ex5
// export default function App() {
//     return (
//         <View style={styles.container}>
//             <Text>ReactNative!!!</Text>
//             {/*<StatusBar backgroundColor="red" barStyle="light-content"/>*/}
//             {/*<StatusBar backgroundColor="#6200EE" barStyle="dark-content"/>*/}
//             {/*<StatusBar backgroundColor="rgba(0,0,0,0.5)" barStyle="dark-content"/>*/}
//             <StatusBar translucent={true} backgroundColor="rgba(0,0,0,0.3)" barStyle="dark-content"/>
//
//         </View>
//     );
// }
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#386b8c',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// });

//ex6
// export default function App() {
//     return (
//         <SafeAreaView style={styles.container}>
//             <StatusBar translucent={true} backgroundColor="rgba(0,0,0,0.3)" barStyle="dark-content"/>
//             <View style={styles.content}>
//                 <Text>ReactNative!!!</Text>
//             </View>
//
//         </SafeAreaView>
//     );
// }
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#386b8c',
//     },
//     content: {
//         marginTop: StatusBar.currentHeight || 0,
//     }
// });

//ex7
// export default function App() {
//     return (
//         <View style={styles.container}>
//             <StatusBarExpo hidden={true}/>
//             <Text>ReactNative!!!</Text>
//         </View>
//     );
// }
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: '#386b8c',
//     },
// });

//ex8
// const Container = styled.View`
//     flex: 1;
//     justify-content: center;
//     align-items: center;
//     background-color: #f0f0f0;
// `;
// const Title = styled.Text`
//     font-size: 24px;
//     color: #333;
// `;
// export default function App() {
//     return (
//         <Container>
//             <Title>Hello World</Title>
//         </Container>
//     );
// }

//ex9
// export default function App() {
//     return (
//         <View style={styles.container}>
//             <Text style={styles.title}>React native Image</Text>
//             <Image
//                 style={styles.image}
//                 source={require('./assets/adaptive-icon.png')}
//             />
//             <Image
//                 style={styles.image}
//                 source={{uri: 'https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg'}}
//                 resizeMode={'cover'}//cover stretch repeat contain
//             />
//         </View>
//     )
// }
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#ba9e9e'
//     },
//     title: {
//         fontSize: 24,
//         color: '#333',
//         marginBottom: 20,
//     },
//     image: {
//         width: 200,
//         height: 200,
//     }
// })

//10
// export default function App() {
//     const [isLight, setIsLight] = useState(true);
//     return (
//         <View style={{flex: 1, backgroundColor: isLight ? '#fff' : '#000'}}>
//             <View style={{marginTop: 100}}>
//                 <Button
//                     title={"Put me"}
//                     onPress={() => {
//                         console.log('CLICK!!!');
//                         setIsLight((prev) => !prev)
//                     }}
//                 />
//             </View>
//             <StatusBar
//                 barStyle={isLight ? "dark-content" : "light-content"}
//                 translucent={true}
//                 backgroundColor="rgba(0,0,0,0.5)"
//             />
//         </View>
//     )
// }
// dz
export default function App() {
    const [isSub, setSub] = useState(false);
    return (
        <View style={{flex: 1, backgroundColor: '#fff'}}>
            <View style={{marginTop: 100, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', padding: 20, backgroundColor: '#9c9c9c'}}>
                <Image source={require('./assets/images.jpg')} style={{width: 50, height: 50, borderRadius: 50}}/>
                <Text>Shrek</Text>
                <Button
                    title={isSub ? "Unsubscribe" : "Subscribe"}
                    color={isSub ? "red" : "blue"}
                    onPress={() => {
                        console.log('Subscribeddddd!!!');
                        setSub((prev) => !prev);
                    }}
                />
            </View>
        </View>
    );
}