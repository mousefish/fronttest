import React from "react";
import Dropzone from "react-dropzone";

// const adaptFileEventToValue = delegate => e => delegate([...e.target.files]);

// export default ({
//   input: { value: omitValue, onChange, onBlur, ...inputProps },
//   meta: omitMeta,
//   ...props
// }) => (
//   <input
//     onChange={adaptFileEventToValue(onChange)}
//     onBlur={adaptFileEventToValue(onBlur)}
//     type="file"
//     {...inputProps}
//     {...props}
//   />
// );

export default ({ input, label, name, meta: { error, touched } }) => {
  const files = input.value;
  console.log("files", files);

  return (
    <div>
      <Dropzone
        style={{border:'1px solid #000'}}
        name={name}
        multiple={true}
        onDrop={(imagesToUpload, e) => {
          const reader = new FileReader();
          reader.onload = () => {
            const src = reader.result;
            // console.log('src', src)
          };

          reader.readAsDataURL(imagesToUpload[0]);
          input.onChange(imagesToUpload);
        }}
      >
        <img
          style={{ height: "100px", width:'100%' }}
          src="https://placeholdit.co//i/800x100?&text=img"
        />
      </Dropzone>
      {touched && error}

      {files &&
      Array.isArray(files) && (
        <ul>{files.map((file, index) => <li key={index}>{file.name}</li>)}</ul>
      )}
    </div>
  );
};