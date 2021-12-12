import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { PokeCardButton } from "../Buttons";
import { subtitleColor } from "../../../../styles/palette";
import { FormControl, TextField } from "@mui/material";
export default function AdoptionDialog({ name }) {
  const [open, setOpen] = React.useState(false);
  const [errors, setErrors] = React.useState({});
  const [nombre, setNombre] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [edad, setEdad] = React.useState(null);
  const [info, setInfo] = React.useState(null);
  const resetForm = () => {
    setErrors({});
    setEmail(null);
    setNombre(null);
    setInfo(null);
    setEdad(null);
  };
  const handleChange = (e) => {
    let copyError = errors;
    let f = e.target.name;
    let v = e.target.value;
    switch (f) {
      case "nombre":
        setNombre(v);
        delete copyError.nombre;
        break;
      case "edad":
        setEdad(v);
        delete copyError.edad;
        break;
      case "email":
        setEmail(v);
        delete copyError.email;
        break;
      case "info":
        setInfo(v);
        delete copyError.info;
        break;
    }
    setErrors(copyError);
  };
  const validate = () => {
    let e = {};
    if (!nombre) {
      e.nombre = "Escriba su nombre";
    }
    if (!edad) {
      e.edad = "Edad Obligatoria";
    }
    if (!email) {
      e.email = "Escriba su email";
    }
    if (!info) {
      e.info = "Escriba su Motivacion";
    }
    setErrors(e);
    let r = Object.values(e).length > 0 ? false : true;
    return r;
  };
  const submit = async () => {
    let isValid = await validate();
    if (isValid) {
      handleClose();
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    resetForm();
    setOpen(false);
  };

  return (
    <>
      <PokeCardButton
        onClick={handleClickOpen}
        style={{ width: "250px" }}
        title="Cuidame"
      />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{`¿Desea Adoptar un ${name}?`}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <div>
              Cada Pokémon es especial por lo que nuestro servicio de adopcion
              es diferente para cada uno.
            </div>
          </DialogContentText>
          <FormControl variant="outlined" sx={{ padding: 1, display: "flex" }}>
            <TextField
              sx={{ margin: 1 }}
              name="nombre"
              label="Nombre Solicitante"
              onChange={handleChange}
              value={nombre}
              error={errors.nombre}
              helperText={errors.nombre}
              inputProps={{
                "aria-label": "weight",
              }}
            />
            <TextField
              sx={{ margin: 1 }}
              name="edad"
              label="Edad Solicitante"
              type="number"
              onChange={handleChange}
              value={edad}
              error={errors.edad}
              helperText={errors.edad}
              inputProps={{
                "aria-label": "weight",
              }}
            />
            <TextField
              sx={{ margin: 1 }}
              name="email"
              label="Email"
              onChange={handleChange}
              value={email}
              error={errors.email}
              helperText={errors.email}
              inputProps={{
                "aria-label": "weight",
              }}
            />
            <TextField
              name="info"
              sx={{ margin: 1 }}
              error={errors.info}
              helperText={errors.info}
              onChange={handleChange}
              placeholder="Explique su motivación"
              multiline
              value={info}
              rows={2}
              rowsMax={4}
            />
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{ color: subtitleColor }}>
            Cerrar
          </Button>
          <Button onClick={submit} autoFocus>
            ¡Adoptar!
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
