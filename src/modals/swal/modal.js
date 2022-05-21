import Swal from "sweetalert2";

export const swal = (
  icon = "success",
  title = "Algo salió mal...",
  text = null
) =>
  Swal.fire({
    icon,
    title,
    text,
  });
