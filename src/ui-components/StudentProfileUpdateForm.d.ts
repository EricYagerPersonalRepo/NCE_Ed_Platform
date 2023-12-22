/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
    email?: string;
    password?: string;
    phone?: string;
    CourseProfiles?: CourseProfile[];
    birthdate?: string;
    registrantID?: string;
};
export declare type StudentProfileUpdateFormValidationValues = {
    firstName?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    password?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
    CourseProfiles?: ValidationFunction<CourseProfile>;
    birthdate?: ValidationFunction<string>;
    registrantID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StudentProfileUpdateFormOverridesProps = {
    StudentProfileUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    password?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    CourseProfiles?: PrimitiveOverrideProps<AutocompleteProps>;
    birthdate?: PrimitiveOverrideProps<TextFieldProps>;
    registrantID?: PrimitiveOverrideProps<AutocompleteProps>;
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
