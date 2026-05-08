import { query } from "../config/db.js";

export const AuteurModel = {
    getAll : () => query("SELECT * FROM auteurs ORDER BY nom, prenom"),
    getById : id => query("SELECT * FROM auteurs WHERE id = $1", [id]),
    create : a => query(
        `INSERT INTO auteurs(nom,prenom,date_naissance,nationalite,biographie) VALUES ($1,$2,$3,$4,$5) RETURNING *`,
        [a.nom,a.prenom,a.date_naissance,a.nationalite,a.biographie]
    ),
    update : (id, a) => query(
        `UPDATE auteurs SET  nom=$1,prenom=$2,date_naissance=$3,
        nationalite=$4,biographie=$5 WHERE id=$6 RETURNING *`,
        [a.nom,a.prenom,a.date_naissance,a.nationalite,a.biographie,id]
    ),
    delete: id => query('DELETE FROM auteurs WHERE id=$1 RETURNING *',[id]),
    getLivres: id => query('SELECT * FROM livres WHERE auteur_id=$1 ORDER BY titre',[id])
};

