/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Autocomplete,
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  SelectField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import {
  getCourseEnrollment,
  listCourseProfiles,
  listStudentProfiles,
} from "../graphql/queries";
import { updateCourseEnrollment } from "../graphql/mutations";
const client = generateClient();
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function CourseEnrollmentUpdateForm(props) {
  const {
    id: idProp,
    courseEnrollment: courseEnrollmentModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    studentProfile: undefined,
    courseProfile: undefined,
    enrollmentDate: "",
    progress: "",
    state: "",
  };
  const [studentProfile, setStudentProfile] = React.useState(
    initialValues.studentProfile
  );
  const [studentProfileLoading, setStudentProfileLoading] =
    React.useState(false);
  const [studentProfileRecords, setStudentProfileRecords] = React.useState([]);
  const [courseProfile, setCourseProfile] = React.useState(
    initialValues.courseProfile
  );
  const [courseProfileLoading, setCourseProfileLoading] = React.useState(false);
  const [courseProfileRecords, setCourseProfileRecords] = React.useState([]);
  const [enrollmentDate, setEnrollmentDate] = React.useState(
    initialValues.enrollmentDate
  );
  const [progress, setProgress] = React.useState(initialValues.progress);
  const [state, setState] = React.useState(initialValues.state);
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = courseEnrollmentRecord
      ? {
          ...initialValues,
          ...courseEnrollmentRecord,
          studentProfile,
          courseProfile,
        }
      : initialValues;
    setStudentProfile(cleanValues.studentProfile);
    setCurrentStudentProfileValue(undefined);
    setCurrentStudentProfileDisplayValue("");
    setCourseProfile(cleanValues.courseProfile);
    setCurrentCourseProfileValue(undefined);
    setCurrentCourseProfileDisplayValue("");
    setEnrollmentDate(cleanValues.enrollmentDate);
    setProgress(cleanValues.progress);
    setState(cleanValues.state);
    setErrors({});
  };
  const [courseEnrollmentRecord, setCourseEnrollmentRecord] = React.useState(
    courseEnrollmentModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getCourseEnrollment.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getCourseEnrollment
        : courseEnrollmentModelProp;
      const studentProfileRecord = record
        ? await record.studentProfile
        : undefined;
      setStudentProfile(studentProfileRecord);
      const courseProfileRecord = record
        ? await record.courseProfile
        : undefined;
      setCourseProfile(courseProfileRecord);
      setCourseEnrollmentRecord(record);
    };
    queryData();
  }, [idProp, courseEnrollmentModelProp]);
  React.useEffect(resetStateValues, [
    courseEnrollmentRecord,
    studentProfile,
    courseProfile,
  ]);
  const [
    currentStudentProfileDisplayValue,
    setCurrentStudentProfileDisplayValue,
  ] = React.useState("");
  const [currentStudentProfileValue, setCurrentStudentProfileValue] =
    React.useState(undefined);
  const studentProfileRef = React.createRef();
  const [
    currentCourseProfileDisplayValue,
    setCurrentCourseProfileDisplayValue,
  ] = React.useState("");
  const [currentCourseProfileValue, setCurrentCourseProfileValue] =
    React.useState(undefined);
  const courseProfileRef = React.createRef();
  const getIDValue = {
    studentProfile: (r) => JSON.stringify({ id: r?.id }),
    courseProfile: (r) => JSON.stringify({ id: r?.id }),
  };
  const studentProfileIdSet = new Set(
    Array.isArray(studentProfile)
      ? studentProfile.map((r) => getIDValue.studentProfile?.(r))
      : getIDValue.studentProfile?.(studentProfile)
  );
  const courseProfileIdSet = new Set(
    Array.isArray(courseProfile)
      ? courseProfile.map((r) => getIDValue.courseProfile?.(r))
      : getIDValue.courseProfile?.(courseProfile)
  );
  const getDisplayValue = {
    studentProfile: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
    courseProfile: (r) => `${r?.title ? r?.title + " - " : ""}${r?.id}`,
  };
  const validations = {
    studentProfile: [
      { type: "Required", validationMessage: "StudentProfile is required." },
    ],
    courseProfile: [
      { type: "Required", validationMessage: "CourseProfile is required." },
    ],
    enrollmentDate: [],
    progress: [],
    state: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
  };
  const fetchStudentProfileRecords = async (value) => {
    setStudentProfileLoading(true);
    const newOptions = [];
    let newNext = "";
    while (newOptions.length < autocompleteLength && newNext != null) {
      const variables = {
        limit: autocompleteLength * 5,
        filter: {
          or: [{ name: { contains: value } }, { id: { contains: value } }],
        },
      };
      if (newNext) {
        variables["nextToken"] = newNext;
      }
      const result = (
        await client.graphql({
          query: listStudentProfiles.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listStudentProfiles?.items;
      var loaded = result.filter(
        (item) => !studentProfileIdSet.has(getIDValue.studentProfile?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setStudentProfileRecords(newOptions.slice(0, autocompleteLength));
    setStudentProfileLoading(false);
  };
  const fetchCourseProfileRecords = async (value) => {
    setCourseProfileLoading(true);
    const newOptions = [];
    let newNext = "";
    while (newOptions.length < autocompleteLength && newNext != null) {
      const variables = {
        limit: autocompleteLength * 5,
        filter: {
          or: [{ title: { contains: value } }, { id: { contains: value } }],
        },
      };
      if (newNext) {
        variables["nextToken"] = newNext;
      }
      const result = (
        await client.graphql({
          query: listCourseProfiles.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listCourseProfiles?.items;
      var loaded = result.filter(
        (item) => !courseProfileIdSet.has(getIDValue.courseProfile?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setCourseProfileRecords(newOptions.slice(0, autocompleteLength));
    setCourseProfileLoading(false);
  };
  React.useEffect(() => {
    fetchStudentProfileRecords("");
    fetchCourseProfileRecords("");
  }, []);
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          studentProfile,
          courseProfile,
          enrollmentDate: enrollmentDate ?? null,
          progress: progress ?? null,
          state: state ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(
                    fieldName,
                    item,
                    getDisplayValue[fieldName]
                  )
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(
                fieldName,
                modelFields[fieldName],
                getDisplayValue[fieldName]
              )
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          const modelFieldsToSave = {
            studentProfileID: modelFields?.studentProfile?.id ?? null,
            courseProfileID: modelFields?.courseProfile?.id ?? null,
            enrollmentDate: modelFields.enrollmentDate ?? null,
            progress: modelFields.progress ?? null,
            state: modelFields.state ?? null,
          };
          await client.graphql({
            query: updateCourseEnrollment.replaceAll("__typename", ""),
            variables: {
              input: {
                id: courseEnrollmentRecord.id,
                ...modelFieldsToSave,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "CourseEnrollmentUpdateForm")}
      {...rest}
    >
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              studentProfile: value,
              courseProfile,
              enrollmentDate,
              progress,
              state,
            };
            const result = onChange(modelFields);
            value = result?.studentProfile ?? value;
          }
          setStudentProfile(value);
          setCurrentStudentProfileValue(undefined);
          setCurrentStudentProfileDisplayValue("");
        }}
        currentFieldValue={currentStudentProfileValue}
        label={"Student profile"}
        items={studentProfile ? [studentProfile] : []}
        hasError={errors?.studentProfile?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("studentProfile", currentStudentProfileValue)
        }
        errorMessage={errors?.studentProfile?.errorMessage}
        getBadgeText={getDisplayValue.studentProfile}
        setFieldValue={(model) => {
          setCurrentStudentProfileDisplayValue(
            model ? getDisplayValue.studentProfile(model) : ""
          );
          setCurrentStudentProfileValue(model);
        }}
        inputFieldRef={studentProfileRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Student profile"
          isRequired={true}
          isReadOnly={false}
          placeholder="Search StudentProfile"
          value={currentStudentProfileDisplayValue}
          options={studentProfileRecords
            .filter(
              (r) => !studentProfileIdSet.has(getIDValue.studentProfile?.(r))
            )
            .map((r) => ({
              id: getIDValue.studentProfile?.(r),
              label: getDisplayValue.studentProfile?.(r),
            }))}
          isLoading={studentProfileLoading}
          onSelect={({ id, label }) => {
            setCurrentStudentProfileValue(
              studentProfileRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentStudentProfileDisplayValue(label);
            runValidationTasks("studentProfile", label);
          }}
          onClear={() => {
            setCurrentStudentProfileDisplayValue("");
          }}
          defaultValue={studentProfile}
          onChange={(e) => {
            let { value } = e.target;
            fetchStudentProfileRecords(value);
            if (errors.studentProfile?.hasError) {
              runValidationTasks("studentProfile", value);
            }
            setCurrentStudentProfileDisplayValue(value);
            setCurrentStudentProfileValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks(
              "studentProfile",
              currentStudentProfileDisplayValue
            )
          }
          errorMessage={errors.studentProfile?.errorMessage}
          hasError={errors.studentProfile?.hasError}
          ref={studentProfileRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "studentProfile")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              studentProfile,
              courseProfile: value,
              enrollmentDate,
              progress,
              state,
            };
            const result = onChange(modelFields);
            value = result?.courseProfile ?? value;
          }
          setCourseProfile(value);
          setCurrentCourseProfileValue(undefined);
          setCurrentCourseProfileDisplayValue("");
        }}
        currentFieldValue={currentCourseProfileValue}
        label={"Course profile"}
        items={courseProfile ? [courseProfile] : []}
        hasError={errors?.courseProfile?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("courseProfile", currentCourseProfileValue)
        }
        errorMessage={errors?.courseProfile?.errorMessage}
        getBadgeText={getDisplayValue.courseProfile}
        setFieldValue={(model) => {
          setCurrentCourseProfileDisplayValue(
            model ? getDisplayValue.courseProfile(model) : ""
          );
          setCurrentCourseProfileValue(model);
        }}
        inputFieldRef={courseProfileRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Course profile"
          isRequired={true}
          isReadOnly={false}
          placeholder="Search CourseProfile"
          value={currentCourseProfileDisplayValue}
          options={courseProfileRecords
            .filter(
              (r) => !courseProfileIdSet.has(getIDValue.courseProfile?.(r))
            )
            .map((r) => ({
              id: getIDValue.courseProfile?.(r),
              label: getDisplayValue.courseProfile?.(r),
            }))}
          isLoading={courseProfileLoading}
          onSelect={({ id, label }) => {
            setCurrentCourseProfileValue(
              courseProfileRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentCourseProfileDisplayValue(label);
            runValidationTasks("courseProfile", label);
          }}
          onClear={() => {
            setCurrentCourseProfileDisplayValue("");
          }}
          defaultValue={courseProfile}
          onChange={(e) => {
            let { value } = e.target;
            fetchCourseProfileRecords(value);
            if (errors.courseProfile?.hasError) {
              runValidationTasks("courseProfile", value);
            }
            setCurrentCourseProfileDisplayValue(value);
            setCurrentCourseProfileValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks(
              "courseProfile",
              currentCourseProfileDisplayValue
            )
          }
          errorMessage={errors.courseProfile?.errorMessage}
          hasError={errors.courseProfile?.hasError}
          ref={courseProfileRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "courseProfile")}
        ></Autocomplete>
      </ArrayField>
      <TextField
        label="Enrollment date"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={enrollmentDate && convertToLocal(new Date(enrollmentDate))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              studentProfile,
              courseProfile,
              enrollmentDate: value,
              progress,
              state,
            };
            const result = onChange(modelFields);
            value = result?.enrollmentDate ?? value;
          }
          if (errors.enrollmentDate?.hasError) {
            runValidationTasks("enrollmentDate", value);
          }
          setEnrollmentDate(value);
        }}
        onBlur={() => runValidationTasks("enrollmentDate", enrollmentDate)}
        errorMessage={errors.enrollmentDate?.errorMessage}
        hasError={errors.enrollmentDate?.hasError}
        {...getOverrideProps(overrides, "enrollmentDate")}
      ></TextField>
      <SelectField
        label="Progress"
        placeholder="Please select an option"
        isDisabled={false}
        value={progress}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              studentProfile,
              courseProfile,
              enrollmentDate,
              progress: value,
              state,
            };
            const result = onChange(modelFields);
            value = result?.progress ?? value;
          }
          if (errors.progress?.hasError) {
            runValidationTasks("progress", value);
          }
          setProgress(value);
        }}
        onBlur={() => runValidationTasks("progress", progress)}
        errorMessage={errors.progress?.errorMessage}
        hasError={errors.progress?.hasError}
        {...getOverrideProps(overrides, "progress")}
      >
        <option
          children="Not started"
          value="NOT_STARTED"
          {...getOverrideProps(overrides, "progressoption0")}
        ></option>
        <option
          children="In progress"
          value="IN_PROGRESS"
          {...getOverrideProps(overrides, "progressoption1")}
        ></option>
        <option
          children="Completed"
          value="COMPLETED"
          {...getOverrideProps(overrides, "progressoption2")}
        ></option>
      </SelectField>
      <SelectField
        label="State"
        placeholder="Please select an option"
        isDisabled={false}
        value={state}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              studentProfile,
              courseProfile,
              enrollmentDate,
              progress,
              state: value,
            };
            const result = onChange(modelFields);
            value = result?.state ?? value;
          }
          if (errors.state?.hasError) {
            runValidationTasks("state", value);
          }
          setState(value);
        }}
        onBlur={() => runValidationTasks("state", state)}
        errorMessage={errors.state?.errorMessage}
        hasError={errors.state?.hasError}
        {...getOverrideProps(overrides, "state")}
      >
        <option
          children="Active"
          value="ACTIVE"
          {...getOverrideProps(overrides, "stateoption0")}
        ></option>
        <option
          children="Paused"
          value="PAUSED"
          {...getOverrideProps(overrides, "stateoption1")}
        ></option>
        <option
          children="Completed"
          value="COMPLETED"
          {...getOverrideProps(overrides, "stateoption2")}
        ></option>
      </SelectField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || courseEnrollmentModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || courseEnrollmentModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
