import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FinalScreen from "./pages/FinalScreen";
import Questions from "./pages/Questions";
import Settings from "./pages/Settings";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";

function App() {
  return (
    <Router>
      <Container maxWidth="sm">
        <Box textAlign="center" marginTop={20}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Typography variant="h5" fontWeight="bold" fontSize={50}>
                    QUIZ APP
                  </Typography>
                  <Settings />
                </>
              }
            ></Route>
            <Route path="/questions" element={<Questions />}></Route>
            <Route path="/finalscreen" element={<FinalScreen />}></Route>
          </Routes>
        </Box>
      </Container>
    </Router>
  );
}

export default App;
