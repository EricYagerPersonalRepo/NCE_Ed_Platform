/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Exercise } from "../API.ts";
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
export declare type ExerciseUpdateFormInputValues = {
    question?: string;
    solution?: string;
    lessonID?: string;
    exerciseType?: string;
    data?: string;
};
export declare type ExerciseUpdateFormValidationValues = {
    question?: ValidationFunction<string>;
    solution?: ValidationFunction<string>;
    lessonID?: ValidationFunction<string>;
    exerciseType?: ValidationFunction<string>;
    data?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ExerciseUpdateFormOverridesProps = {
    ExerciseUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    question?: PrimitiveOverrideProps<TextFieldProps>;
    solution?: PrimitiveOverrideProps<TextFieldProps>;
    lessonID?: PrimitiveOverrideProps<TextFieldProps>;
    exerciseType?: PrimitiveOverrideProps<SelectFieldProps>;
    data?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type ExerciseUpdateFormProps = React.PropsWithChildren<{
    overrides?: ExerciseUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    exercise?: Exercise;
    onSubmit?: (fields: ExerciseUpdateFormInputValues) => ExerciseUpdateFormInputValues;
    onSuccess?: (fields: ExerciseUpdateFormInputValues) => void;
    onError?: (fields: ExerciseUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ExerciseUpdateFormInputValues) => ExerciseUpdateFormInputValues;
    onValidate?: ExerciseUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ExerciseUpdateForm(props: ExerciseUpdateFormProps): React.ReactElement;
