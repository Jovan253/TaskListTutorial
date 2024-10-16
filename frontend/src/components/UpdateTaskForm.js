import { Dialog, DialogTitle, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import axios from "axios";
import { API_URL } from "../utils";

export const UpdateTaskForm = ({
  isDialogueOpen,
  setIsDialogueOpen,
  task,
  fetchTasks,
}) => {
  const { id, completed } = task;
  const [taskName, setTaskName] = useState("");

  const handleUpdateTaskName = async () => {
    try {
      await axios.put(API_URL, {
        id,
        name: taskName,
        completed,
      });

      await fetchTasks();
      setTaskName("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Dialog open={isDialogueOpen}>
      <DialogTitle>Edit Task</DialogTitle>
      <div className="dialog">
        <TextField
          size="small"
          label="task"
          variant="outlined"
          onChange={(e) => setTaskName(e.target.value)}
        />
        <Button
          variant="contained"
          onClick={async () => {
            await handleUpdateTaskName();
            setIsDialogueOpen(false);
          }}
        >
          <CheckIcon />
        </Button>
      </div>
    </Dialog>
  );
};
