const deleteBtn = document.querySelector(".deleteBtn");



deleteBtn.addEventListener("click", () => {
    console.log("deletado")
    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this list!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                swal({
                    title: "List Deleted!",
                    text: "What if we create another? ...",
                    icon: "success",
                    button: "Hell Yeah!",
                });
                clearItems();
            } else {
                swal("Your list is safe!");
            }
        });
});