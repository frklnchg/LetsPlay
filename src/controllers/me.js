//  EXTERNAL IMPORTS
import axios from "axios";

const url = 'https://api.joeleprof.com/lets-play/me';
export async function getMe() {
    const token = sessionStorage.getItem('token');
    const headers = {
        headers: { 'Authorization': 'Bearer ' + token }
    };
    try {
        const { data } = await axios.get(url, headers);
        return data;
    } catch (error) {
        return error;
    }

}
export async function updateMe(username, email, password) {
    const token = sessionStorage.getItem('token');
    const headers = {
        headers: { 'Authorization': 'Bearer ' + token }
    };

    const body = {
        'username': username,
        'email': email,
        'password': password
    }
    try {
        const { data } = await axios.put(url, body, headers);
        return data;
    } catch (error) {
        return error;
    }

}

export async function deleteMe() {
    const token = sessionStorage.getItem('token');
    const headers = {
        headers: { 'Authorization': 'Bearer ' + token }
    };
    try {
        const { data } = await axios.delete(url, headers);
        return data;
    } catch (error) {
        return error;
    }

}

export async function resetScore(email, password) {
    const token = sessionStorage.getItem('token');
    const headers = {
        headers: { 'Authorization': 'Bearer ' + token }
    };
    try {
        const { data } = await axios.put(url + '/reset-score', {}, headers);
        return data;
    } catch (error) {
        return error;
    }

}