/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { CourseProfile, StudentProfile } from "../API.ts";
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
export declare type StudentProfileUpdateFormInputValues = {
    firstName?: string;
    lastName?: string;
    email?: string;
    address?: string;
    CourseProfiles?: CourseProfile[];
};
export declare type StudentProfileUpdateFormValidationValues = {
    firstName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    CourseProfiles?: ValidationFunction<CourseProfile>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StudentProfileUpdateFormOverridesProps = {
    StudentProfileUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextAreaFieldProps>;
    CourseProfiles?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type StudentProfileUpdateFormProps = React.PropsWithChildren<{
    overrides?: StudentProfileUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    studentProfile?: StudentProfile;
    onSubmit?: (fields: StudentProfileUpdateFormInputValues) => StudentProfileUpdateFormInputValues;
    onSuccess?: (fields: StudentProfileUpdateFormInputValues) => void;
    onError?: (fields: StudentProfileUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: StudentProfileUpdateFormInputValues) => StudentProfileUpdateFormInputValues;
    onValidate?: StudentProfileUpdateFormValidationValues;
} & React.CSSProperties>;
export default function StudentProfileUpdateForm(props: StudentProfileUpdateFormProps): React.ReactElement;
