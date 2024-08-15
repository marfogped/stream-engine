import { CloudArrowUpIcon, TrashIcon } from "@heroicons/react/24/outline";
import { ChangeEvent, DragEvent, useState } from "react";
import { Typography } from "../../../components/ui";
import { ApplyFormValues } from "../../../lib/types";
import { Button } from "@chakra-ui/react";
import { isFileTypeValid } from "../../../lib/utils";

interface FileDropzoneProps {
  setFormValues: (values: ApplyFormValues) => void;
  formValues: ApplyFormValues;
}

export const FileDropzone: React.FC<FileDropzoneProps> = ({
  setFormValues,
  formValues,
}) => {
  const [showError, setShowError] = useState(false);

  const handleDragOver = (event: DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDrop = (event: DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    event.stopPropagation();

    const file = event.dataTransfer.files[0];
    if (file && isFileTypeValid(file)) {
      setShowError(false);
      setFormValues({ ...formValues, cv: file });
    } else {
      setShowError(true);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && isFileTypeValid(file)) {
      setShowError(false);
      setFormValues({ ...formValues, cv: file });
    } else {
      setShowError(true);
    }
  };

  const handleClear = () => {
    setFormValues({ ...formValues, cv: "" });
  };

  return (
    <div className="relative h-max z-0 col-span-2">
      <label
        htmlFor="dropzone-file"
        className="mx-auto flex h-48 w-full flex-col items-center justify-center rounded-xl border-2 border-dashed border-yellow-300 p-6 text-center"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {formValues.cv instanceof File ? (
          <div className="mt-4 flex items-center justify-between gap-4">
            <p className="text-green-600 max-w-48 truncate">
              {formValues.cv.name}
            </p>
            <Button
              onClick={handleClear}
              bg="#dc2626"
              _hover={{ bg: "#b91c1c" }}
              className="z-10"
            >
              <TrashIcon className="h-6 w-6 text-white-50" />
            </Button>
          </div>
        ) : (
          <>
            <CloudArrowUpIcon className="h-10 w-10" />
            <Typography as="p" variant="lg" color="black">
              Resume
            </Typography>
            <Typography
              as="span"
              variant="md"
              className="text-gray-600 tracking-wide"
            >
              Upload or drag & drop your .pdf, .doc, and .docx file.
            </Typography>
          </>
        )}
      </label>
      <input
        type="file"
        className="opacity-0 absolute top-0 left-0 w-full h-full cursor-pointer"
        name="cv"
        accept=".pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        onChange={handleChange}
        aria-label="Upload your resume"
        id="cv"
        required
      />
      {showError && (
        <span className="text-red-600 mt-2">
          Please upload a valid file format (.pdf, .doc, .docx).
        </span>
      )}
    </div>
  );
};
