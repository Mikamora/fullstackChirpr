import { Query } from "./index";

const all = async () => Query("SELECT * FROM chirps");
const one = async (id: string) => Query("SELECT * FROM chirps WHERE id = ?", [id]);
const put = async (newChirp: any, chirpid: number) => Query("UPDATE chirps SET ? WHERE id = ?", [newChirp, chirpid]);
const destroy = async (id: number) => Query("DELETE FROM chirps WHERE id = ?", [id]);
const post = async (chirp: any) => Query("INSERT INTO chirps SET ?", chirp);


export default {
    all,
    one,
    post,
    put,
    destroy
}