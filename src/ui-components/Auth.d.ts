/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, CheckboxFieldProps, FlexProps, ImageProps, PasswordFieldProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type AuthOverridesProps = {
    Auth?: PrimitiveOverrideProps<ViewProps>;
    "NCE Schoolhouse 1"?: PrimitiveOverrideProps<ImageProps>;
    "Group 1"?: PrimitiveOverrideProps<ViewProps>;
    TextField?: PrimitiveOverrideProps<TextFieldProps>;
    PasswordField?: PrimitiveOverrideProps<PasswordFieldProps>;
    "Frame 4372"?: PrimitiveOverrideProps<FlexProps>;
    CheckboxField?: PrimitiveOverrideProps<CheckboxFieldProps>;
    Button39081304?: PrimitiveOverrideProps<ButtonProps>;
    Button39081305?: PrimitiveOverrideProps<ButtonProps>;
    "sign up"?: PrimitiveOverrideProps<FlexProps>;
    "Don't have an account?"?: PrimitiveOverrideProps<TextProps>;
    Button39081308?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type AuthProps = React.PropsWithChildren<Partial<ViewProps> & {} & {
    overrides?: AuthOverridesProps | undefined | null;
}>;
export default function Auth(props: AuthProps): React.ReactElement;
