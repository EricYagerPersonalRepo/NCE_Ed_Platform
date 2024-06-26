/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { StudentProfile } from "../API.ts";
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
    name?: string;
    email?: string;
    status?: string;
    notificationsEnabled?: boolean;
    darkModeEnabled?: boolean;
    language?: string;
    isAdmin?: boolean;
};
export declare type StudentProfileUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    notificationsEnabled?: ValidationFunction<boolean>;
    darkModeEnabled?: ValidationFunction<boolean>;
    language?: ValidationFunction<string>;
    isAdmin?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StudentProfileUpdateFormOverridesProps = {
    StudentProfileUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
    notificationsEnabled?: PrimitiveOverrideProps<SwitchFieldProps>;
    darkModeEnabled?: PrimitiveOverrideProps<SwitchFieldProps>;
    language?: PrimitiveOverrideProps<TextFieldProps>;
    isAdmin?: PrimitiveOverrideProps<SwitchFieldProps>;
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
