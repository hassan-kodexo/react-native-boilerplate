import  React, {useState , useEffect} from 'react';
import {
  Button,
  Screen,
  Input,
  KeyboardAvoidingScreen,
  KeyboardActionBar,
} from '~ui';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  Keyboard,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {useDispatch} from 'react-redux';


export const Login = () => {
  const dispatch = useDispatch();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [inputType, setInputType] = useState('Email');
  const [inputId, setInputId] = useState('email');
  
  const schema = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required().min(6),
  });
  

  const {handleSubmit, control, setValue} = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    let apiData = {
      ...data,
      fcm_token: 'fcm_token',
    };
    dispatch(login(apiData));
  };

  const setEmailAction = () => {
    setInputId('email');
    setInputType('Email');
  };

  const setPasswordAction = () => {
    setInputId('password');
    setInputType('Password');
  };

  const onPressNext = () => {
    if (inputId === 'email') {
      passwordRef?.current?.focus();
      setPasswordAction();
    } else if (inputId === 'password') {
      Keyboard.dismiss();
      handleSubmit(onSubmit);
    }
  };
  const onPressPrev = () => {
    if (inputId === 'password') {
      setEmailAction();
      emailRef?.current?.focus();
    } else if (inputId === 'email') {
      Keyboard.dismiss();
    }
  };

  return (
    <KeyboardAvoidingScreen>
      <TouchableOpacity
        style={{flex: 1}}
        activeOpacity={1}
        onPress={() => 
          Keyboard.dismiss()
        }>
        <Screen>
          <Input
            inputAccessoryViewID={inputId}
            inputRef={emailRef}
            autoFocus={true}
            control={control}
            name="email"
            label="Email"
            returnKeyType="next"
            placeholder="abc@gmail.com"
            onChangeText={text => setValue('email', text)}
            onSubmitEditing={() => passwordRef?.current?.focus()}
            onFocus={() => setEmailAction()}
          />
          <Input
            inputAccessoryViewID={inputId}
            inputRef={passwordRef}
            control={control}
            name="password"
            label="Password"
            onChangeText={text => setValue('email', text)}
            returnKeyType="done"
            placeholder="***"
            onFocus={() => setPasswordAction()}
            onSubmitEditing={handleSubmit(onSubmit)}
            secureTextEntry={true}
          />
          <Button
            label="Login"
            onPress={handleSubmit(onSubmit)}
            variant="secondary"
          />
        </Screen>
      </TouchableOpacity>
      <KeyboardActionBar
        inputType={inputType}
        nativeID={inputId}
        onPressDone={handleSubmit(onSubmit)}
        onPressNext={onPressNext}
        onPressPrev={onPressPrev}
      />
    </KeyboardAvoidingScreen>
  );
};
