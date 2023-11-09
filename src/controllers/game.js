
//  EXTERNAL IMPORTS
import axios from 'axios';


export async function gameLose() {
    const token = sessionStorage.getItem("token");
    console.log(token);

    const headers = {
        headers: { 'Authorization': 'Bearer ' + token }
    };

    try {
        const response = await axios.put('https://api.joeleprof.com/lets-play/game/lost', {}, headers);
        return true;

    } catch (error) {
        console.log(error);
        return false;
    }

}

export async function gameWin() {
    const token = sessionStorage.getItem("token");
    const headers = {
        headers: { 'Authorization': 'Bearer ' + token }
    };
    try {
        await axios.put('https://api.joeleprof.com/lets-play/game/wins', {}, headers);
        return true;
    } catch (error) {
        return false;
    }
}