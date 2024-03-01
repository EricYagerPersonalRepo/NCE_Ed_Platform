/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon, PasswordField, Text, View } from "@aws-amplify/ui-react";
export default function LargeMobileLogin(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="430px"
      height="932px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "LargeMobileLogin")}
      {...rest}
    >
      <Icon
        width="430px"
        height="928px"
        viewBox={{ minX: 0, minY: 0, width: 430, height: 928 }}
        paths={[
          {
            d: "M430 0L430 928L0 928L430 0Z",
            fill: "rgba(4,60,14,0.25)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="4px"
        left="0px"
        {...getOverrideProps(overrides, "Polygon 1")}
      ></Icon>
      <Text
        fontFamily="Tauri"
        fontSize="24px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="36px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="422px"
        height="57px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="829px"
        left="144px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="<northCountryEngineer>"
        {...getOverrideProps(overrides, "<northCountryEngineer>")}
      ></Text>
      <Icon
        width="158px"
        height="0px"
        viewBox={{ minX: 0, minY: 0, width: 158, height: 1 }}
        paths={[
          {
            d: "M0 0L158 0L158 -5L0 -5L0 0Z",
            stroke: "rgba(0,0,0,1)",
            fillRule: "nonzero",
            strokeWidth: 5,
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="882px"
        left="257px"
        transformOrigin="top left"
        transform="rotate(0deg)"
        {...getOverrideProps(overrides, "Line 4")}
      ></Icon>
      <Text
        fontFamily="Ubuntu Condensed"
        fontSize="20px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="30px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="852px"
        left="272px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="education platform"
        {...getOverrideProps(overrides, "education platform")}
      ></Text>
      <PasswordField
        width="300px"
        height="unset"
        label="Password"
        position="absolute"
        top="124px"
        left="65px"
        placeholder="Placeholder"
        size="large"
        isDisabled={false}
        labelHidden={false}
        variation="quiet"
        hideShowPassword={false}
        {...getOverrideProps(overrides, "PasswordField")}
      ></PasswordField>
    </View>
  );
}
