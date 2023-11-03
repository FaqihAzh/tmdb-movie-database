import React from "react";
import Typography from "../../components/Typography";
import Button from "../../components/Button";

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center h-screen w-full gap-4 flex-col">
      <Typography variant="paragraph">
        Sorry, the TV Series detail page is not yet available
      </Typography>
      <Button isPrimary type="link" href="/">
        Back to Home
      </Button>
    </div>
  );
};

export default ErrorPage;
