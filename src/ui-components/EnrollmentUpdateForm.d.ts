/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Enrollment } from "../API.ts";
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
export declare type EnrollmentUpdateFormInputValues = {
    userID?: string;
    courseID?: string;
    progress?: number;
    completed?: boolean;
    achievements?: string[];
};
export declare type EnrollmentUpdateFormValidationValues = {
    userID?: ValidationFunction<string>;
    courseID?: ValidationFunction<string>;
    progress?: ValidationFunction<number>;
    completed?: ValidationFunction<boolean>;
    achievements?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EnrollmentUpdateFormOverridesProps = {
    EnrollmentUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userID?: PrimitiveOverrideProps<TextFieldProps>;
    courseID?: PrimitiveOverrideProps<TextFieldProps>;
    progress?: PrimitiveOverrideProps<TextFieldProps>;
    completed?: PrimitiveOverrideProps<SwitchFieldProps>;
    achievements?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EnrollmentUpdateFormProps = React.PropsWithChildren<{
    overrides?: EnrollmentUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    enrollment?: Enrollment;
    onSubmit?: (fields: EnrollmentUpdateFormInputValues) => EnrollmentUpdateFormInputValues;
    onSuccess?: (fields: EnrollmentUpdateFormInputValues) => void;
    onError?: (fields: EnrollmentUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EnrollmentUpdateFormInputValues) => EnrollmentUpdateFormInputValues;
    onValidate?: EnrollmentUpdateFormValidationValues;
} & React.CSSProperties>;
export default function EnrollmentUpdateForm(props: EnrollmentUpdateFormProps): React.ReactElement;
