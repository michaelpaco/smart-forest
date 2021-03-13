import Swal from 'sweetalert2'

export default ({ app }, inject) => {
  inject('swal', Swal.mixin({
    buttonsStyling: false,
    confirmButtonClass: 'm-2 flex justify-center py-2 px-4 border border-transparent text-md font-medium rounded-md text-white bg-green-700 hover:bg-green-800 focus:outline-none',
    cancelButtonClass: 'm-2 flex justify-center py-2 px-4 border border-transparent text-md font-medium rounded-md text-white bg-red-700 hover:bg-red-800 focus:outline-none',
    showLoaderOnConfirm: true,
    inputClass: 'form-control',
    showCancelButton: true
  }))
}
