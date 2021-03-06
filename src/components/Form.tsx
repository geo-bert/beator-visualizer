import MusicNoteIcon from "@mui/icons-material/MusicNote";
import UploadIcon from "@mui/icons-material/Upload";
import { Avatar, Button, FormGroup, Typography } from "@mui/material";
import { useState } from "react";
import exampleModel from "../model/example-model";
import { SetStringQ } from "../types/react-types";

function Form({ setText }: { setText: SetStringQ }) {
  let [file, setFile] = useState<File>();
  return (
    <FormGroup
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        alignContent: "center",
      }}>
      <Avatar sx={{ mt: 5, bgcolor: "#26a69a" }}>
        <MusicNoteIcon />
      </Avatar>
      <Typography component="h1" variant="h3" sx={{ mb: 2 }}>
        Beatle
      </Typography>
      <Typography sx={{ mb: 2 }}>
        Visualize and analyze BEATOR2 models
      </Typography>
      <Typography component="h2" variant="h6">
        Select a valid BEATOR2 file to start
      </Typography>
      <Button
        sx={{ mt: 1, mb: 1 }}
        startIcon={<UploadIcon />}
        variant="outlined"
        component="label"
        disableRipple>
        Upload File
        <input
          type="file"
          hidden
          accept=".btor2"
          onChange={(e) => setFile(e.currentTarget.files!.item(0)!)}
        />
      </Button>
      <Button
        sx={{ mt: 1, mb: 1 }}
        disabled={!file}
        variant="contained"
        onClick={() => file!.text().then(setText)}
        disableRipple>
        Evaluate Model
      </Button>
      <Button
        color="primary"
        sx={{ mt: 1, mb: 1 }}
        variant="text"
        onClick={() => setText(exampleModel)}
        disableRipple>
        Or Use Example File
      </Button>
    </FormGroup>
  );
}

export default Form;
