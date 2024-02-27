import      { useState, useEffect } from 'react';
import { TextField, FormControl, InputLabel, Select, MenuItem, Checkbox, FormControlLabel, Button, Typography } from '@mui/material';

const initialValues = {
  name: '',
  employeeId: '',
  city: '',
  gender: '',
};

const cities = ['▼ Select City ▼', 'New York', 'London', 'Tokyo'];

const CustomerForm = () => {
  const [formData, setFormData] = useState(initialValues);
  const [savedData, setSavedData] = useState(null);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const savedFormData = JSON.parse(localStorage.getItem('customerData'));
    if (savedFormData) {
      setSavedData(savedFormData);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('customerData', JSON.stringify(formData));
    setSavedData(formData);
    setEditMode(false);
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <InputLabel htmlFor="name">Name</InputLabel>
          <TextField
            id="name"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={!editMode}
          />
        </FormControl>
        <br />
        <FormControl>
          <InputLabel htmlFor="employeeId">Employee ID</InputLabel>
          <TextField
            id="employeeId"
            name="employeeId"
            type="number"
            placeholder="Enter Employee ID"
            value={formData.employeeId}
            onChange={handleChange}
            required
            disabled={!editMode}
          />
        </FormControl>
        <br />
        <FormControl required disabled={!editMode}>
          <InputLabel htmlFor="city">City</InputLabel>
          <Select
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
          >
            {cities.map((city) => (
              <MenuItem key={city} value={city}>
                {city}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <br />
        <FormControlLabel
          control={
            <Checkbox
              name="gender"
              checked={formData.gender === 'Male'}
              onChange={handleChange}
              value="Male"
              disabled={!editMode}
            />
          }
          label="Male"
        />
        <FormControlLabel
          control={
            <Checkbox
              name="gender"
              checked={formData.gender === 'Female'}
              onChange={handleChange}
              value="Female"
              disabled={!editMode}
            />
          }
          label="Female"
        />
        <br />
        {editMode ? (
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        ) : (
          <Button onClick={handleEdit} variant="contained" color="primary">
            Edit
          </Button>
        )}
      </form>
      <br />
      {savedData && (
        <div>
          <Typography variant="h6">Saved Data:</Typography>
          <Typography>Name: {savedData.name}</Typography>
          <Typography>Employee ID: {savedData.employeeId}</Typography>
          <Typography>City: {savedData.city}</Typography>
          <Typography>Gender: {savedData.gender}</Typography>
        </div>
      )}
    </div>
  );
};

export default CustomerForm;
