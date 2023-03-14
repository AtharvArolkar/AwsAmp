import { FileUploader, Theme, ThemeProvider, View } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import './files-upload.css';

export const DefaultFileUploaderExample = () => {
  const theme :Theme = {
    name: "my-theme",
    tokens: {
      colors: {},
      borderWidths: {
        small: { value: "2px" },
        medium: { value: "4px" },
        large: { value: "8px" },
      },
      radii: {
        xs: { value: "1rem" },
        small: { value: "2rem" },
        medium: { value: "2rem" },
        large: { value: "2rem" },
        xl: { value: "3rem" },
      },
    },
  };
  return (
    <div className="browse-file">
      <ThemeProvider theme={theme}>
        <View>
          <FileUploader          
            hasMultipleFiles={true}
            acceptedFileTypes={["image/*", "video/*"]}
            accessLevel="public"
          />
        </View>
      </ThemeProvider>
    </div>
  );
};
