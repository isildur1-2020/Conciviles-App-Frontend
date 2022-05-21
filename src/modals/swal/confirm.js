import Swal from "sweetalert2";

export const swalConfirm = (data = {}) => {
  const { title, text } = data;
  return Swal.fire({
    icon: "info",
    title: title ?? "Estás seguro?",
    text: text ?? null,
    showCancelButton: true,
    confirmButtonText: "Aceptar",
    cancelButtonText: `Cancelar`,
  });
};
