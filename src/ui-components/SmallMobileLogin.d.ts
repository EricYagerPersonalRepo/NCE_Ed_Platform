/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type SmallMobileLoginOverridesProps = {
    SmallMobileLogin?: PrimitiveOverrideProps<ViewProps>;
    "Frame 2"?: PrimitiveOverrideProps<FlexProps>;
    TextField?: PrimitiveOverrideProps<FlexProps>;
    PasswordField?: PrimitiveOverrideProps<FlexProps>;
    "Frame 4372"?: PrimitiveOverrideProps<FlexProps>;
    CheckboxField?: PrimitiveOverrideProps<FlexProps>;
    Button38664655?: PrimitiveOverrideProps<FlexProps>;
    Button38664656?: PrimitiveOverrideProps<FlexProps>;
    "sign up"?: PrimitiveOverrideProps<FlexProps>;
    "Don't have an account?"?: PrimitiveOverrideProps<TextProps>;
    Button38664659?: PrimitiveOverrideProps<FlexProps>;
    "education platform"?: PrimitiveOverrideProps<TextProps>;
    "Polygon 1"?: PrimitiveOverrideProps<IconProps>;
    "<northCountryEngineer>"?: PrimitiveOverrideProps<TextProps>;
    "Line 4"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type SmallMobileLoginProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: SmallMobileLoginOverridesProps | undefined | null;
}>;
export default function SmallMobileLogin(props: SmallMobileLoginProps): React.ReactElement;
