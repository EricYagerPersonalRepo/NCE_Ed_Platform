/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import AuthenticatedHeader from "./AuthenticatedHeader";
import UnauthenticatedHeader from "./UnauthenticatedHeader";
import { Flex } from "@aws-amplify/ui-react";
export default function NavBarHeaderDark(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="80px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="80px 80px 80px 80px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "NavBarHeaderDark")}
      {...rest}
    >
      <AuthenticatedHeader
        display="flex"
        gap="40px"
        direction="row"
        width="1440px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        boxShadow="0px 2px 6px rgba(0.05098039284348488, 0.10196078568696976, 0.14901961386203766, 0.15000000596046448)"
        padding="24px 32px 24px 32px"
        backgroundColor="rgba(117,109,106,1)"
        {...getOverrideProps(overrides, "AuthenticatedHeader")}
      ></AuthenticatedHeader>
      <UnauthenticatedHeader
        display="flex"
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="space-between"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        boxShadow="0px 2px 6px rgba(0.05098039284348488, 0.10196078568696976, 0.14901961386203766, 0.15000000596046448)"
        padding="16px 32px 16px 32px"
        backgroundColor="rgba(117,109,106,1)"
        {...getOverrideProps(overrides, "UnauthenticatedHeader")}
      ></UnauthenticatedHeader>
    </Flex>
  );
}
