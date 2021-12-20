import { Button, LinearProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import SelectField from "../components/SelectField";
import TextFieldComp from "../components/TextFieldComp";
import useAxios from "../hooks/useAxios";
import { useNavigate } from "react-router-dom";

const Settings = () => {

    const navigate = useNavigate();

    const { response, error, loading } = useAxios({ url: "/api_category.php" });

    if(loading) {
        return (
            <Box mt={20}>
                <LinearProgress />
            </Box>
        )
    }

    if(error) {
        return (
            <Typography variant="h6" mt={20} color="red">
                Something Wrong!!
            </Typography>
        );
    }

    const difficultyOptions = [
        { id: "easy", name: "Easy"},
        { id: "medium", name: "Medium"},
        { id: "hard", name: "Hard"}
    ]

    const typeOptions = [
        { id: "multiple", name: "Multiple Choice"},
        { id: "boolean", name: "True/False"},
    ]

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/questions");
    }

  return (
    <form onSubmit={handleSubmit}>
      <SelectField options={response.trivia_categories} label="Category" />
      <SelectField options={difficultyOptions} label="Difficulty" />
      <SelectField options={typeOptions} label="Type" />
      <TextFieldComp />

      <Box marginTop={3} width="100%">
        <Button fullWidth variant="contained" type="submit">
          Get Started
        </Button>
      </Box>
    </form>
  );
};

export default Settings;
