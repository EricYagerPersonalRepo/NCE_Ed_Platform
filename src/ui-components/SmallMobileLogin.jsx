/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function SmallMobileLogin(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="375px"
      height="667px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "SmallMobileLogin")}
      {...rest}
    >
      <Flex
        gap="16px"
        direction="column"
        width="368px"
        height="667px"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="0px"
        left="0px"
        padding="16px 60px 16px 60px"
        {...getOverrideProps(overrides, "Frame 2")}
      >
        <Flex
          width="unset"
          height="unset"
          {...getOverrideProps(overrides, "TextField")}
        ></Flex>
        <Flex
          width="unset"
          height="unset"
          {...getOverrideProps(overrides, "PasswordField")}
        ></Flex>
        <Flex
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="space-between"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 4372")}
        >
          <Flex
            width="unset"
            height="unset"
            {...getOverrideProps(overrides, "CheckboxField")}
          ></Flex>
        </Flex>
        <Flex
          width="unset"
          height="unset"
          {...getOverrideProps(overrides, "Button38664655")}
        ></Flex>
        <Flex
          width="unset"
          height="unset"
          {...getOverrideProps(overrides, "Button38664656")}
        ></Flex>
        <Flex
          gap="8px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "sign up")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
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
          <Flex
            width="unset"
            height="unset"
            {...getOverrideProps(overrides, "Button38664659")}
          ></Flex>
        </Flex>
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
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="education platform"
          {...getOverrideProps(overrides, "education platform")}
        ></Text>
      </Flex>
      <Icon
        width="375px"
        height="662.64px"
        viewBox={{ minX: 0, minY: 0, width: 375, height: 662.6422729492188 }}
        paths={[
          {
            d: "M360 9.4707L375 0L375 662.642L0 662.642L360 9.4707Z",
            fill: "rgba(4,60,14,0.25)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="4.36px"
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
        width="278px"
        height="57px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="586px"
        left="97px"
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
        top="639px"
        left="210px"
        transformOrigin="top left"
        transform="rotate(0deg)"
        {...getOverrideProps(overrides, "Line 4")}
      ></Icon>
    </View>
  );
}
