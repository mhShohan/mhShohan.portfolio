import React, { Dispatch, SetStateAction } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const RichTextEditor = ({
  value,
  setValue,
}: {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}) => {
  return <ReactQuill theme='snow' style={{ height: '350px' }} value={value} onChange={setValue} />;
};

export default RichTextEditor;
