import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import LinearProgressWithLabel from "../../../../components/ProgressBarLabel";
import { secondaryColor, subtitleColor } from "../../../../styles/palette";
import { Divider } from "@mui/material";
export default function StatsDialog({ name, stats, open, setOpen }) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          {`${name} Stats`}
          <Divider />
        </DialogTitle>

        <DialogContent sx={{ width: "300px" }}>
          {stats.map((stat) => {
            return (
              <div style={{ margin: 10 }}>
                <span style={{ color: secondaryColor }}>{stat.name}</span>
                <LinearProgressWithLabel
                  value={stat.stat.base_stat + stat.stat.effort}
                />
                <br></br>
              </div>
            );
          })}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{ color: subtitleColor }}>
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
