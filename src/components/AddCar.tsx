import { useState } from "react";
import { Car } from "../types";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { addCar } from "../api/carapi";

function AddCar() {
  const [open, setOpen] = useState(false);
  const [car, setCar] = useState<Car>({
    brand: "",
    model: "",
    color: "",
    registrationNumber: "",
    modelYear: 0,
    price: 0,
  });

  const queryClient = useQueryClient();
  const { mutate } = useMutation(addCar, {
    onSuccess: () => {
      queryClient.invalidateQueries(["cars"]);
    },
    onError: (err) => {
      console.error(err);
    },
  });
  const handleClickOpen = () => {
    setOpen(true);
  };

  // Close the modal form
  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCar({ ...car, [event.target.name]: event.target.value });
  };

  const handleSave = () => {
    mutate(car);
    setCar({
      brand: "",
      model: "",
      color: "",
      registrationNumber: "",
      modelYear: 0,
      price: 0,
    });
    handleClose();
  };
  return (
    <>
      <button onClick={handleClickOpen}>New Car</button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New car</DialogTitle>
        <DialogContent>
          <input
            placeholder="Brand"
            name="brand"
            value={car.brand}
            onChange={handleChange}
          />
          <br />
          <input
            placeholder="Model"
            name="model"
            value={car.model}
            onChange={handleChange}
          />
          <br />
          <input
            placeholder="Color"
            name="color"
            value={car.color}
            onChange={handleChange}
          />
          <br />
          <input
            placeholder="Year"
            name="modelYear"
            value={car.modelYear}
            onChange={handleChange}
          />
          <br />
          <input
            placeholder="Reg.nr"
            name="registrationNumber"
            value={car.registrationNumber}
            onChange={handleChange}
          />
          <br />
          <input
            placeholder="Price"
            name="price"
            value={car.price}
            onChange={handleChange}
          />
          <br />
        </DialogContent>
        <DialogActions>
          <button onClick={handleClose}>Cancel</button>
          <button onClick={handleSave}>Save</button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default AddCar;
