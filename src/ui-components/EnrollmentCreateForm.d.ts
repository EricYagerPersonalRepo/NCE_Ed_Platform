/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type EnrollmentCreateFormInputValues = {
    userID?: string;
    courseID?: string;
    progress?: number;
    completed?: boolean;
    achievements?: string[];
};
export declare type EnrollmentCreateFormValidationValues = {
    userID?: ValidationFunction<string>;
    courseID?: ValidationFunction<string>;
    progress?: ValidationFunction<number>;
    completed?: ValidationFunction<boolean>;
    achievements?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EnrollmentCreateFormOverridesProps = {
    EnrollmentCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userID?: PrimitiveOverrideProps<TextFieldProps>;
    courseID?: PrimitiveOverrideProps<TextFieldProps>;
    progress?: PrimitiveOverrideProps<TextFieldProps>;
    completed?: PrimitiveOverrideProps<SwitchFieldProps>;
    achievements?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EnrollmentCreateFormProps = React.PropsWithChildren<{
    overrides?: EnrollmentCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: EnrollmentCreateFormInputValues) => EnrollmentCreateFormInputValues;
    onSuccess?: (fields: EnrollmentCreateFormInputValues) => void;
    onError?: (fields: EnrollmentCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EnrollmentCreateFormInputValues) => EnrollmentCreateFormInputValues;
    onValidate?: EnrollmentCreateFormValidationValues;
} & React.CSSProperties>;
export default function EnrollmentCreateForm(props: EnrollmentCreateFormProps): React.ReactElement;
