import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
} from "react-native";

const initialState = {
  login: "",
  email: "",
  password: "",
};

export default function RegistrationScreen() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);

  const submitForm = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  };
  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.containerRegistration}>
        <ImageBackground
          style={styles.bgImage}
          source={require("../assets/images/PhotoBG.jpg")}
        >
          <View style={styles.bodyRegistration}>
            <Text style={styles.titleText}>Registration</Text>
            <View style={styles.formRegistration}>
              <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
              >
                <TextInput
                  style={styles.inputLogin}
                  name="login"
                  value={state.login}
                  placeholder="Login"
                  onFocus={() => setIsShowKeyboard(true)}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, login: value }))
                  }
                />
                <TextInput
                  style={styles.inputMail}
                  name="email"
                  value={state.email}
                  placeholder="Email"
                  onFocus={() => setIsShowKeyboard(true)}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, email: value }))
                  }
                />
                <TextInput
                  style={styles.inputPassword}
                  placeholder="Password"
                  secureTextEntry={true}
                  name="password"
                  value={state.password}
                  onFocus={() => setIsShowKeyboard(true)}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, password: value }))
                  }
                />
              </KeyboardAvoidingView>
              <TouchableOpacity style={styles.button} onPress={submitForm}>
                <Text style={styles.buttonText}>Register</Text>
              </TouchableOpacity>
            </View>
            <Text
              style={{
                ...styles.loginIn,
                marginBottom: isShowKeyboard ? 32 : 66,
              }}
            >
              Already have an account? Sign in
            </Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  containerRegistration: {
    flex: 1,
    backgroundColor: "#fff",
  },
  bgImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  bodyRegistration: {
    // height: 549,
    // flex: 1,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  titleText: {
    fontSize: 30,
    fontFamily: "Roboto-Medium",
    marginBottom: 33,
    marginTop: 99,
  },
  formRegistration: {
    marginBottom: 16,
  },
  inputLogin: {
    width: 343,
    height: 50,
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    color: "#212121",
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
  },
  inputMail: {
    width: 343,
    height: 50,
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    color: "#212121",
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
  },
  inputPassword: {
    width: 343,
    height: 50,
    padding: 16,
    fontFamily: "Roboto-Regular",
    marginBottom: 43,
    fontSize: 16,
    color: "#212121",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
  },
  button: {
    width: 343,
    height: 50,
    padding: 16,
    color: "#212121",
    borderRadius: 100,
    backgroundColor: "#FF6C00",
  },
  buttonText: {
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
  },
  loginIn: {
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    color: "#1B4371",
  },
});
