/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { IconProps, PasswordFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type LargeMobileLoginOverridesProps = {
    LargeMobileLogin?: PrimitiveOverrideProps<ViewProps>;
    "Polygon 1"?: PrimitiveOverrideProps<IconProps>;
    "<northCountryEngineer>"?: PrimitiveOverrideProps<TextProps>;
    "Line 4"?: PrimitiveOverrideProps<IconProps>;
    "education platform"?: PrimitiveOverrideProps<TextProps>;
    PasswordField?: PrimitiveOverrideProps<PasswordFieldProps>;
} & EscapeHatchProps;
export declare type LargeMobileLoginProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: LargeMobileLoginOverridesProps | undefined | null;
}>;
export default function LargeMobileLogin(props: LargeMobileLoginProps): React.ReactElement;
