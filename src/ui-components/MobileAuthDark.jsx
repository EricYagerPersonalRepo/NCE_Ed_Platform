/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import {
  Button,
  CheckboxField,
  Flex,
  Image,
  PasswordField,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function MobileAuthDark(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="393px"
      height="852px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(117,109,106,1)"
      {...getOverrideProps(overrides, "MobileAuthDark")}
      {...rest}
    >
      <Image
        width="265px"
        height="231px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="62px"
        left="64px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "NCE Schoolhouse_DARK 1")}
      ></Image>
      <View
        padding="0px 0px 0px 0px"
        width="347px"
        height="376px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="333px"
        left="23px"
        {...getOverrideProps(overrides, "Group 1")}
      >
        <TextField
          width="347px"
          height="76px"
          label="Email"
          position="absolute"
          top="0px"
          left="0px"
          placeholder=""
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField")}
        ></TextField>
        <PasswordField
          width="347px"
          height="77px"
          label="Password"
          position="absolute"
          top="93px"
          left="0px"
          placeholder=""
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          hideShowPassword={false}
          {...getOverrideProps(overrides, "PasswordField")}
        ></PasswordField>
        <Flex
          gap="10px"
          direction="row"
          width="347px"
          height="43px"
          justifyContent="space-between"
          alignItems="center"
          position="absolute"
          top="187px"
          left="0px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 4372")}
        >
          <CheckboxField
            width="unset"
            height="unset"
            label="Remember me"
            shrink="0"
            size="default"
            defaultChecked={true}
            isDisabled={false}
            labelPosition="end"
            {...getOverrideProps(overrides, "CheckboxField")}
          ></CheckboxField>
          <Button
            width="unset"
            height="unset"
            shrink="0"
            size="default"
            isDisabled={false}
            variation="link"
            children="Forgot password"
            {...getOverrideProps(overrides, "Button39061213")}
          ></Button>
        </Flex>
        <Button
          width="347px"
          height="43px"
          position="absolute"
          top="247px"
          left="0px"
          backgroundColor="rgba(43,43,43,1)"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Sign in"
          {...getOverrideProps(overrides, "Button39061214")}
        ></Button>
        <Flex
          gap="8px"
          direction="column"
          width="347px"
          height="69px"
          justifyContent="flex-start"
          alignItems="center"
          position="absolute"
          top="307px"
          left="0px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "sign up")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Don't have an account? "
            {...getOverrideProps(overrides, "Don't have an account?")}
          ></Text>
          <Button
            width="unset"
            height="unset"
            shrink="0"
            size="small"
            isDisabled={false}
            variation="link"
            children="Sign up"
            {...getOverrideProps(overrides, "Button39061217")}
          ></Button>
        </Flex>
      </View>
    </View>
  );
}
