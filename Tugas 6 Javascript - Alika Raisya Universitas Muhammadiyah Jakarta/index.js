import { index, store, destroy } from "./controller.js";

const main = () => {
    const newUser1 = {
        nama: 'Raka Pratama', 
        umur: 21, 
        alamat: 'Jl. Mawar No. 12, Jakarta', 
        email: 'raka.pratama@gmail.com'
    }

    const newUser2 = {
        nama: 'Nadia Putri', 
        umur: 23, 
        alamat: 'Jl. Melati No. 45, Bandung', 
        email: 'nadia.putri@gmail.com'
    }

    store(newUser1);
    store(newUser2);
    destroy("budi");
    index();
}

main();