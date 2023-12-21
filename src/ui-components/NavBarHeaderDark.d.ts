/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AuthenticatedHeaderProps } from "./AuthenticatedHeader";
import { UnauthenticatedHeaderProps } from "./UnauthenticatedHeader";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NavBarHeaderDarkOverridesProps = {
    NavBarHeaderDark?: PrimitiveOverrideProps<FlexProps>;
    AuthenticatedHeader?: AuthenticatedHeaderProps;
    UnauthenticatedHeader?: UnauthenticatedHeaderProps;
} & EscapeHatchProps;
export declare type NavBarHeaderDarkProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: NavBarHeaderDarkOverridesProps | undefined | null;
}>;
export default function NavBarHeaderDark(props: NavBarHeaderDarkProps): React.ReactElement;
