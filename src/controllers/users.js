//  EXTERNAL IMPORTS
import axios from "axios";


export async function find() {
    const token = sessionStorage.getItem("token");
    const headers = {
        headers: { 'Authorization': 'Bearer ' + token }
    };
    const { data } = await axios.get('https://api.joeleprof.com/lets-play/users', headers);

    return data.data;
}


export async function findById(id) {
    const token = sessionStorage.getItem("token");
    const headers = { headers: { 'Authorization': 'Bearer ' + token } }
    const { data } = await axios.get('https://api.joeleprof.com/lets-play/users/' + id, headers);
    return data.data;
}

export async function deleteUser(id) {
    const token = sessionStorage.getItem("token");
    const headers = { headers: { 'Authorization': 'Bearer ' + token } }
    const { data } = await axios.delete('https://api.joeleprof.com/lets-play/users/' + id, headers);
    return data;
}


