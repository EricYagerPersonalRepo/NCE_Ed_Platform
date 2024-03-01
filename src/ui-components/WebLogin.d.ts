/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, IconProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type WebLoginOverridesProps = {
    WebLogin?: PrimitiveOverrideProps<FlexProps>;
    "Frame 1"?: PrimitiveOverrideProps<FlexProps>;
    TextField?: PrimitiveOverrideProps<FlexProps>;
    PasswordField?: PrimitiveOverrideProps<FlexProps>;
    "Frame 4372"?: PrimitiveOverrideProps<FlexProps>;
    CheckboxField?: PrimitiveOverrideProps<FlexProps>;
    Button38654576?: PrimitiveOverrideProps<FlexProps>;
    Button38654577?: PrimitiveOverrideProps<FlexProps>;
    "sign up"?: PrimitiveOverrideProps<FlexProps>;
    "Don't have an account?"?: PrimitiveOverrideProps<TextProps>;
    Button38654580?: PrimitiveOverrideProps<FlexProps>;
    "Polygon 2"?: PrimitiveOverrideProps<IconProps>;
    "education platform"?: PrimitiveOverrideProps<TextProps>;
    Mobile?: PrimitiveOverrideProps<TextProps>;
    Web?: PrimitiveOverrideProps<TextProps>;
    Execute?: PrimitiveOverrideProps<TextProps>;
    Program?: PrimitiveOverrideProps<TextProps>;
    Architect?: PrimitiveOverrideProps<TextProps>;
    "react.js"?: PrimitiveOverrideProps<TextProps>;
    Debug?: PrimitiveOverrideProps<TextProps>;
    Javascript?: PrimitiveOverrideProps<TextProps>;
    "next.js"?: PrimitiveOverrideProps<TextProps>;
    AWS?: PrimitiveOverrideProps<TextProps>;
    Azure?: PrimitiveOverrideProps<TextProps>;
    Analyze?: PrimitiveOverrideProps<TextProps>;
    Refactor?: PrimitiveOverrideProps<TextProps>;
    SkillUp?: PrimitiveOverrideProps<TextProps>;
    Create?: PrimitiveOverrideProps<TextProps>;
    Run?: PrimitiveOverrideProps<TextProps>;
    Java?: PrimitiveOverrideProps<TextProps>;
    Install?: PrimitiveOverrideProps<TextProps>;
    Code38674703?: PrimitiveOverrideProps<TextProps>;
    Code38674724?: PrimitiveOverrideProps<TextProps>;
    Design?: PrimitiveOverrideProps<TextProps>;
    Test?: PrimitiveOverrideProps<TextProps>;
    Python?: PrimitiveOverrideProps<TextProps>;
    Bash?: PrimitiveOverrideProps<TextProps>;
    Compile?: PrimitiveOverrideProps<TextProps>;
    Configure?: PrimitiveOverrideProps<TextProps>;
    "Line 2"?: PrimitiveOverrideProps<IconProps>;
    "Polygon 1"?: PrimitiveOverrideProps<IconProps>;
    "<northCountryEngineer>"?: PrimitiveOverrideProps<TextProps>;
    "Line 3"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type WebLoginProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: WebLoginOverridesProps | undefined | null;
}>;
export default function WebLogin(props: WebLoginProps): React.ReactElement;
