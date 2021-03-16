import Swal from "sweetalert2";

// eslint-disable-next-line no-empty-pattern
export default ({}, inject) => {
  inject(
    "swal",
    Swal.mixin({
      buttonsStyling: false,
      confirmButtonClass:
        "m-2 flex justify-center py-2 px-4 border border-transparent text-md font-medium rounded-md text-white bg-green-700 hover:bg-green-800 focus:outline-none",
    })
  );
};
