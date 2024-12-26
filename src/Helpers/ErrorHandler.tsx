import axios from "axios";
import { toast } from "react-toastify";

export const handleError = (error: any) => {
  if (axios.isAxiosError(error)) {
    const err = error.response;

    if (err?.data && Array.isArray(err.data)) {
      // Pastikan err.data tidak undefined sebelum diiterasi
      for (let val of err.data) {
        if (val.description) {
          toast.warning(val.description);
        }
      }
    } else if (err?.data?.errors && Array.isArray(err.data.errors)) {
      // Jika ada errors dalam bentuk array
      for (let val of err.data.errors) {
        toast.warning(val.description);
      }
    } else if (err?.data?.errors && typeof err.data.errors === "object") {
      // Jika errors dalam bentuk objek
      for (let e in err.data.errors) {
        toast.warning(err.data.errors[e][0]);
      }
    } else if (err?.data) {
      // Pesan error langsung
      toast.warning(err.data);
    } else if (err?.status === 401) {
      // Penanganan untuk status 401
      toast.warning(`Please login`);
      window.history.pushState({}, "LoginPage", "/login");
    } else if (err) {
      // Fallback jika error tidak dikenali
      toast.warning(err?.data);
    }
  } else {
    // Jika error bukan dari axios
    toast.error("An unexpected error occurred.");
  }
};
