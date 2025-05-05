import { Box, Skeleton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles(() => ({
  loading: {
    height: "80vh",
  },
}));

const CustomDetailsSkeleton = ({ LoopRange }) => {
  const classes = useStyles();

  return (
    <div className={`form-container ${classes.loading}`}>
      <div className="row align-items-center">
        {LoopRange.map((limit) => {
          return (
            <>
              <Box sx={{ width: "32%" }}>
                <Skeleton className="py-4" animation="wave" height={60} />
              </Box>
              <Box sx={{ width: "2%" }}>
                <Skeleton
                  style={{
                    marginLeft: "33px",
                  }}
                  className="mt-1"
                  variant="circular"
                  width={25}
                  height={25}
                />
              </Box>
              <Box sx={{ width: "64%" }}>
                <Skeleton className="py-4" animation={false} height={60} />
              </Box>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default CustomDetailsSkeleton;
