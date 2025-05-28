import React, {useState} from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    TextInput,
    Modal, FlatList, SafeAreaView
} from 'react-native';
import * as Yup from "yup";
import {Formik} from "formik";

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

const validationSchema = Yup.object({
    Name: Yup.string().required("Name is required"),
    Image: Yup.string()
        .required("Image URL is required")
        .url("Invalid URL"),
});

export default function App() {
    const [isOpen, setIsOpen] = useState(false);
    const [users, setUsers] = useState([]);

    const toggleSubscribe = (index) => {
        setUsers((prevUsers) =>
            prevUsers.map((user, i) =>
                i === index ? { ...user, isSub: !user.isSub } : user
            )
        );
    };

    const addUser = (user) => {
        setUsers((prevUsers) => [...prevUsers, { ...user, isSub: false }]);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.createButtonContainer}>
                <Button title="Create" onPress={() => setIsOpen(true)} />
            </View>

            <FlatList
                data={users}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <View style={styles.userCard}>
                        <Image
                            source={{ uri: item.Image }}
                            style={styles.userImage}
                        />
                        <Text style={styles.userName}>{item.Name}</Text>
                        <Button
                            title={item.isSub ? "Unsubscribe" : "Subscribe"}
                            color={item.isSub ? "red" : "blue"}
                            onPress={() => toggleSubscribe(index)}
                        />
                    </View>
                )}
            />

            <Modal
                visible={isOpen}
                animationType="slide"
                transparent={true}
                onRequestClose={() => setIsOpen(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Create Form</Text>

                        <Formik
                            initialValues={{ Name: "", Image: "" }}
                            validationSchema={validationSchema}
                            onSubmit={(values, { resetForm }) => {
                                addUser(values);
                                resetForm();
                                setIsOpen(false);
                            }}
                        >
                            {({
                                  handleSubmit,
                                  handleChange,
                                  values,
                                  errors,
                                  touched,
                              }) => (
                                <View>
                                    <TextInput
                                        style={styles.input}
                                        onChangeText={handleChange("Name")}
                                        value={values.Name}
                                        placeholder="Enter name"
                                    />
                                    {errors.Name && touched.Name && (
                                        <Text style={styles.errorText}>{errors.Name}</Text>
                                    )}
                                    <TextInput
                                        style={styles.input}
                                        onChangeText={handleChange("Image")}
                                        value={values.Image}
                                        placeholder="Enter image URL"
                                        keyboardType="url"
                                    />
                                    {errors.Image && touched.Image && (
                                        <Text style={styles.errorText}>{errors.Image}</Text>
                                    )}

                                    <View style={styles.buttonRow}>
                                        <Button title="Submit" onPress={handleSubmit} />
                                        <Button title="Close" onPress={() => setIsOpen(false)} />
                                    </View>
                                </View>
                            )}
                        </Formik>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    createButtonContainer: {
        padding: 20,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
    modalContent: {
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 10,
        width: "80%",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center",
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    errorText: {
        color: "red",
        marginBottom: 8,
    },
    userCard: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 15,
        marginHorizontal: 15,
        marginBottom: 10,
        backgroundColor: "#e3e3e3",
        borderRadius: 10,
    },
    userImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    userName: {
        flex: 1,
        fontSize: 16,
        fontWeight: "bold",
        marginLeft: 10,
    },
    buttonRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
    },
});