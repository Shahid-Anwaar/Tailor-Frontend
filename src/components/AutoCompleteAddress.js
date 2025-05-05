import React, { useEffect, useState } from "react";
import usePlacesService from "react-google-autocomplete/lib/usePlacesAutocompleteService";
import { Autocomplete, TextField, CircularProgress } from "@mui/material";

export default function GooglePlacesAutocomplete({ setSelectedLocation, defaultValue }) {
  const [inputValue, setInputValue] = useState(defaultValue || "");
  const [selectedValue, setSelectedValue] = useState(null);

  const {
    placesService,
    placePredictions,
    getPlacePredictions,
    isPlacePredictionsLoading,
  } = usePlacesService({
    apiKey: "AIzaSyAo9xaGKFpVQcL1u4KrjiuLyt-8c4bpZTU",
  });

   // Set default input value on mount or when defaultValue changes
   useEffect(() => {
    if (defaultValue && !selectedValue) {
      setInputValue(defaultValue);
      setSelectedValue({ description: defaultValue });
    }
  }, [defaultValue, selectedValue]);

  // When user selects an address (selectedValue), get full place details
  useEffect(() => {
    if (selectedValue?.place_id) {
      placesService?.getDetails(
        { placeId: selectedValue.place_id },
        (placeDetails) => setSelectedLocation(placeDetails)
      );
    }
  }, [selectedValue, placesService, setSelectedLocation]);

  return (
    <Autocomplete
      fullWidth
      options={placePredictions}
      getOptionLabel={(option) => option.description || ""}
      loading={isPlacePredictionsLoading}
      inputValue={inputValue}  // Ensure inputValue is used for display
      value={selectedValue} 
      onInputChange={(event, value) => {
        setInputValue(value);
        getPlacePredictions({ input: value });
      }}
      onChange={(event, newValue) => {
        setSelectedValue(newValue);
        setInputValue(newValue?.description || "");
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search Address"
          variant="outlined"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {isPlacePredictionsLoading ? (
                  <CircularProgress size={24} />
                ) : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
  );
}
