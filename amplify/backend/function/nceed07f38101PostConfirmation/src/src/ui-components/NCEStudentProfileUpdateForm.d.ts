/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { NCEStudentProfile } from "../API.ts";
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
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type NCEStudentProfileUpdateFormInputValues = {
    name?: string;
    email?: string;
    status?: string;
};
export declare type NCEStudentProfileUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NCEStudentProfileUpdateFormOverridesProps = {
    NCEStudentProfileUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type NCEStudentProfileUpdateFormProps = React.PropsWithChildren<{
    overrides?: NCEStudentProfileUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    nCEStudentProfile?: NCEStudentProfile;
    onSubmit?: (fields: NCEStudentProfileUpdateFormInputValues) => NCEStudentProfileUpdateFormInputValues;
    onSuccess?: (fields: NCEStudentProfileUpdateFormInputValues) => void;
    onError?: (fields: NCEStudentProfileUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: NCEStudentProfileUpdateFormInputValues) => NCEStudentProfileUpdateFormInputValues;
    onValidate?: NCEStudentProfileUpdateFormValidationValues;
} & React.CSSProperties>;
export default function NCEStudentProfileUpdateForm(props: NCEStudentProfileUpdateFormProps): React.ReactElement;
