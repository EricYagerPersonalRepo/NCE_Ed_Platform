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
    cognitoUserID?: string;
    name?: string;
    email?: string;
    CourseProfiles?: CourseProfile[];
    birthdate?: string;
};
export declare type StudentProfileUpdateFormValidationValues = {
    cognitoUserID?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    CourseProfiles?: ValidationFunction<CourseProfile>;
    birthdate?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StudentProfileUpdateFormOverridesProps = {
    StudentProfileUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    cognitoUserID?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    CourseProfiles?: PrimitiveOverrideProps<AutocompleteProps>;
    birthdate?: PrimitiveOverrideProps<TextFieldProps>;
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
