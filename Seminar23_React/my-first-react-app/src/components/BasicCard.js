import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Typography from "@mui/material/Typography";

export default function BasicCard({ number, task }) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Task №{number}
        </Typography>
        <Typography variant="body2">{task}</Typography>
      </CardContent>
      <CardActions>
        <IconButton
          aria-label="delete"
        >
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
