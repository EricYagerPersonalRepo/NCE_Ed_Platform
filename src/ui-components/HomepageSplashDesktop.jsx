/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
  useNavigateAction,
} from "./utils";
import { Button, Flex, Image, Text } from "@aws-amplify/ui-react";
export default function HomepageSplashDesktop(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Heading: {},
        Body: {},
        Message: {},
        Button: {},
        HeroMessage: {},
        Left: {},
        image: {},
        Right: {},
        HomepageSplashDesktop: {},
      },
      variantValues: { mode: "Light" },
    },
    {
      overrides: {
        Heading: { color: "rgba(254,230,254,1)" },
        Body: { color: "rgba(217,217,217,1)" },
        Message: {},
        Button: {},
        HeroMessage: {},
        Left: { backgroundColor: "rgba(13,26,38,1)" },
        image: { width: "unset", alignSelf: "stretch" },
        Right: {},
        HomepageSplashDesktop: {},
      },
      variantValues: { mode: "Dark" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  const buttonOnClick = useNavigateAction({ type: "reload" });
  return (
    <Flex
      gap="0"
      direction="row"
      width="1440px"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      display="flex"
      {...getOverrideProps(overrides, "HomepageSplashDesktop")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="column"
        width="720px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="120px 120px 120px 120px"
        backgroundColor="rgba(255,255,255,1)"
        display="flex"
        {...getOverrideProps(overrides, "Left")}
      >
        <Flex
          gap="24px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "HeroMessage")}
        >
          <Flex
            gap="16px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            display="flex"
            {...getOverrideProps(overrides, "Message")}
          >
            <Text
              fontFamily="Inter"
              fontSize="24px"
              fontWeight="600"
              color="rgba(13,26,38,1)"
              lineHeight="30px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Learning is one click away"
              {...getOverrideProps(overrides, "Heading")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(48,64,80,1)"
              lineHeight="24px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0.01px"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="North Country Engineer is a free, intense learning initiative targeting the Potsdam, Canton, and Gouverneur areas. Our mission is to raise the technical talent floor here by leveraging years of big tech engineering experience in a hybrid synchronous/asynchronous program."
              {...getOverrideProps(overrides, "Body")}
            ></Text>
          </Flex>
          <Button
            width="unset"
            height="unset"
            shrink="0"
            size="large"
            isDisabled={false}
            variation="primary"
            children="Get started"
            onClick={() => {
              buttonOnClick();
            }}
            {...getOverrideProps(overrides, "Button")}
          ></Button>
        </Flex>
      </Flex>
      <Flex
        gap="10px"
        direction="column"
        width="720px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Right")}
      >
        <Image
          width="720px"
          height="unset"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="0px 0px 0px 0px"
          objectFit="unset"
          {...getOverrideProps(overrides, "image")}
        ></Image>
      </Flex>
    </Flex>
  );
}
